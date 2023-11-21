import * as grpc from "@grpc/grpc-js";
import { Metadata, ServiceError } from "@grpc/grpc-js";
import { ChannelRef } from "@grpc/grpc-js/build/src/channelz";
import { ServerSurfaceCall } from "@grpc/grpc-js/build/src/server-call";
import { Call, MessageContext } from "@grpc/grpc-js/build/src/call-interface";

import * as runtime from "../proto/kyverdk/runtime/v1/runtime";
import * as Buffer from "buffer";

export class DirectCall implements Call {
  private listener: grpc.InterceptingListener;
  private method: any;
  private requestType: any;
  private responseType: any;

  constructor(method: any, requestType: any, responseType: any) {
    this.listener = {
      onReceiveMessage(_message: any) {},
      onReceiveStatus(_status: grpc.StatusObject) {},
      onReceiveMetadata(_metadata: Metadata) {},
    };
    this.method = method;
    this.requestType = requestType;
    this.responseType = responseType;
  }

  cancelWithStatus(_status: grpc.status, _details: string): void {}

  getCallNumber(): number {
    return 0;
  }

  getPeer(): string {
    return "";
  }

  halfClose(): void {}

  sendMessageWithContext(_context: MessageContext, message: Buffer): void {
    const payload = this.requestType.decode(message);

    // calls the grpc method directly without using grpc
    this.method(
      { request: payload },
      (error: ServiceError | null, response: any) => {
        if (error) {
          this.listener.onReceiveStatus(error);
          return;
        }

        const value = this.responseType.create(response);
        const msg = Buffer.Buffer.from(
          this.responseType.encode(value).finish()
        );

        this.listener.onReceiveMessage(msg);
        this.listener.onReceiveStatus({
          code: grpc.status.OK,
          details: "",
          metadata: new Metadata(),
        });
      }
    );
  }

  setCredentials(_credentials: grpc.CallCredentials): void {}

  start(_metadata: Metadata, listener: grpc.InterceptingListener): void {
    this.listener = listener;
  }

  startRead(): void {}
}

// @ts-ignore
export class DirectChannel implements grpc.Channel {
  private services: {};

  constructor(services: {}) {
    this.services = services;
  }

  close(): void {}

  createCall(
    call: string,
    _deadline: grpc.Deadline,
    _host: string | null | undefined,
    _parentCall: ServerSurfaceCall | null,
    _propagateFlags: number | null | undefined
  ): Call {
    // Extract the method name from the path
    // Example:  /kyverdk.runtime.v1.RuntimeService/GetRuntimeName -> GetRuntimeName
    const callName = call.split("/")[2];

    // Convert the method name to camelCase
    const camelCaseCallName =
      callName.charAt(0).toLowerCase() + callName.slice(1);

    // Get the request type from the runtime service
    // Example: GetRuntimeName -> GetRuntimeNameRequest
    // @ts-ignore
    const requestType: any = runtime[`${callName}Request`];

    // Get the response type from the runtime service
    // Example: GetRuntimeName -> GetRuntimeNameResponse
    // @ts-ignore
    const responseType: any = runtime[`${callName}Response`];

    // @ts-ignore
    const method = this.services[camelCaseCallName];

    // console.debug(
    //   `Call method ${method.name} ${callName}Request -> ${callName}Response`
    // );

    return new DirectCall(method, requestType, responseType);
  }

  getChannelzRef(): ChannelRef {
    return { id: 0, kind: "channel", name: "" };
  }

  getConnectivityState(_tryToConnect: boolean): grpc.connectivityState {
    return grpc.connectivityState.READY;
  }

  getTarget(): string {
    return "";
  }

  watchConnectivityState(
    _currentState: grpc.connectivityState,
    _deadline: Date | number,
    _callback: (error?: Error) => void
  ): void {}
}
