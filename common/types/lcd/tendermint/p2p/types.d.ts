import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "tendermint.p2p";
export interface ProtocolVersion {
    p2p: string;
    block: string;
    app: string;
}
export interface NodeInfo {
    protocol_version?: ProtocolVersion;
    node_id: string;
    listen_addr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other?: NodeInfoOther;
}
export interface NodeInfoOther {
    tx_index: string;
    rpc_address: string;
}
export interface PeerInfo {
    id: string;
    address_info: PeerAddressInfo[];
    last_connected?: Date;
}
export interface PeerAddressInfo {
    address: string;
    last_dial_success?: Date;
    last_dial_failure?: Date;
    dial_failures: number;
}
export declare const ProtocolVersion: {
    encode(message: ProtocolVersion, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolVersion;
    fromJSON(object: any): ProtocolVersion;
    toJSON(message: ProtocolVersion): unknown;
    fromPartial<I extends {
        p2p?: string | undefined;
        block?: string | undefined;
        app?: string | undefined;
    } & {
        p2p?: string | undefined;
        block?: string | undefined;
        app?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ProtocolVersion>]: never; }>(object: I): ProtocolVersion;
};
export declare const NodeInfo: {
    encode(message: NodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeInfo;
    fromJSON(object: any): NodeInfo;
    toJSON(message: NodeInfo): unknown;
    fromPartial<I extends {
        protocol_version?: {
            p2p?: string | undefined;
            block?: string | undefined;
            app?: string | undefined;
        } | undefined;
        node_id?: string | undefined;
        listen_addr?: string | undefined;
        network?: string | undefined;
        version?: string | undefined;
        channels?: Uint8Array | undefined;
        moniker?: string | undefined;
        other?: {
            tx_index?: string | undefined;
            rpc_address?: string | undefined;
        } | undefined;
    } & {
        protocol_version?: ({
            p2p?: string | undefined;
            block?: string | undefined;
            app?: string | undefined;
        } & {
            p2p?: string | undefined;
            block?: string | undefined;
            app?: string | undefined;
        } & { [K in Exclude<keyof I["protocol_version"], keyof ProtocolVersion>]: never; }) | undefined;
        node_id?: string | undefined;
        listen_addr?: string | undefined;
        network?: string | undefined;
        version?: string | undefined;
        channels?: Uint8Array | undefined;
        moniker?: string | undefined;
        other?: ({
            tx_index?: string | undefined;
            rpc_address?: string | undefined;
        } & {
            tx_index?: string | undefined;
            rpc_address?: string | undefined;
        } & { [K_1 in Exclude<keyof I["other"], keyof NodeInfoOther>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof NodeInfo>]: never; }>(object: I): NodeInfo;
};
export declare const NodeInfoOther: {
    encode(message: NodeInfoOther, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeInfoOther;
    fromJSON(object: any): NodeInfoOther;
    toJSON(message: NodeInfoOther): unknown;
    fromPartial<I extends {
        tx_index?: string | undefined;
        rpc_address?: string | undefined;
    } & {
        tx_index?: string | undefined;
        rpc_address?: string | undefined;
    } & { [K in Exclude<keyof I, keyof NodeInfoOther>]: never; }>(object: I): NodeInfoOther;
};
export declare const PeerInfo: {
    encode(message: PeerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeerInfo;
    fromJSON(object: any): PeerInfo;
    toJSON(message: PeerInfo): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        address_info?: {
            address?: string | undefined;
            last_dial_success?: Date | undefined;
            last_dial_failure?: Date | undefined;
            dial_failures?: number | undefined;
        }[] | undefined;
        last_connected?: Date | undefined;
    } & {
        id?: string | undefined;
        address_info?: ({
            address?: string | undefined;
            last_dial_success?: Date | undefined;
            last_dial_failure?: Date | undefined;
            dial_failures?: number | undefined;
        }[] & ({
            address?: string | undefined;
            last_dial_success?: Date | undefined;
            last_dial_failure?: Date | undefined;
            dial_failures?: number | undefined;
        } & {
            address?: string | undefined;
            last_dial_success?: Date | undefined;
            last_dial_failure?: Date | undefined;
            dial_failures?: number | undefined;
        } & { [K in Exclude<keyof I["address_info"][number], keyof PeerAddressInfo>]: never; })[] & { [K_1 in Exclude<keyof I["address_info"], keyof {
            address?: string | undefined;
            last_dial_success?: Date | undefined;
            last_dial_failure?: Date | undefined;
            dial_failures?: number | undefined;
        }[]>]: never; }) | undefined;
        last_connected?: Date | undefined;
    } & { [K_2 in Exclude<keyof I, keyof PeerInfo>]: never; }>(object: I): PeerInfo;
};
export declare const PeerAddressInfo: {
    encode(message: PeerAddressInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeerAddressInfo;
    fromJSON(object: any): PeerAddressInfo;
    toJSON(message: PeerAddressInfo): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        last_dial_success?: Date | undefined;
        last_dial_failure?: Date | undefined;
        dial_failures?: number | undefined;
    } & {
        address?: string | undefined;
        last_dial_success?: Date | undefined;
        last_dial_failure?: Date | undefined;
        dial_failures?: number | undefined;
    } & { [K in Exclude<keyof I, keyof PeerAddressInfo>]: never; }>(object: I): PeerAddressInfo;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
