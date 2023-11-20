import * as grpc from "@grpc/grpc-js";
import { Metadata } from "@grpc/grpc-js";
import { ChannelRef } from "@grpc/grpc-js/build/src/channelz";
import { ServerSurfaceCall } from "@grpc/grpc-js/build/src/server-call";
import { Call, MessageContext } from "@grpc/grpc-js/build/src/call-interface";

import * as runtime from "../proto/kyverdk/runtime/v1/runtime";
import * as Buffer from "buffer";

export class DirectCall implements Call {
  private listener: grpc.InterceptingListener;
  private method: any;
  private responseType: any;

  constructor(method: any, responseType: any) {
    this.listener = {
      onReceiveMessage(message: any) {},
      onReceiveStatus(status: grpc.StatusObject) {},
      onReceiveMetadata(metadata: Metadata) {},
    };
    this.method = method;
    this.responseType = responseType;
  }

  cancelWithStatus(status: grpc.status, details: string): void {}

  getCallNumber(): number {
    return 0;
  }

  getPeer(): string {
    return "";
  }

  halfClose(): void {}

  sendMessageWithContext(context: MessageContext, message: Buffer): void {
    const unaryCall = { request: {} };

    // calls the grpc method directly without using grpc
    this.method(unaryCall, (error: Error | null, response: any) => {
      const value = this.responseType.create(response);
      const msg = Buffer.Buffer.from(this.responseType.encode(value).finish());

      this.listener.onReceiveMessage(msg);
      this.listener.onReceiveStatus({
        code: grpc.status.OK,
        details: "",
        metadata: new Metadata(),
      });
    });
  }

  setCredentials(credentials: grpc.CallCredentials): void {}

  start(metadata: Metadata, listener: grpc.InterceptingListener): void {
    this.listener = listener;
  }

  startRead(): void {}
}

// @ts-ignore
export class DirectChannel implements grpc.Channel {
  private grpcServices: {};

  constructor(fakeService: {}) {
    this.grpcServices = fakeService;
  }

  close(): void {}

  createCall(
    call: string,
    deadline: grpc.Deadline,
    host: string | null | undefined,
    parentCall: ServerSurfaceCall | null,
    propagateFlags: number | null | undefined
  ): Call {
    // Extract the method name from the path
    // Example:  /kyverdk.runtime.v1.RuntimeService/GetRuntimeName -> GetRuntimeName
    const callName = call.split("/")[2];

    // Convert the method name to camelCase
    const camelCaseCallName =
      callName.charAt(0).toLowerCase() + callName.slice(1);

    // Get the response type from the runtime service
    // Example: GetRuntimeName -> GetRuntimeNameResponse
    // @ts-ignore
    const responseType: any = runtime[`${callName}Response`];

    // @ts-ignore
    const method = this.grpcServices[camelCaseCallName];
    return new DirectCall(method, responseType);
  }

  getChannelzRef(): ChannelRef {
    return { id: 0, kind: "channel", name: "" };
  }

  getConnectivityState(tryToConnect: boolean): grpc.connectivityState {
    return grpc.connectivityState.READY;
  }

  getTarget(): string {
    return "";
  }

  watchConnectivityState(
    currentState: grpc.connectivityState,
    deadline: Date | number,
    callback: (error?: Error) => void
  ): void {}
}
