import * as grpcWeb from 'grpc-web';

import * as core_eventstore_v1_eventstore_pb from '../../../core/eventstore/v1/eventstore_pb';


export class EventStoreClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: core_eventstore_v1_eventstore_pb.CreateEventRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: core_eventstore_v1_eventstore_pb.CreateEventResponse) => void
  ): grpcWeb.ClientReadableStream<core_eventstore_v1_eventstore_pb.CreateEventResponse>;

}

export class EventStorePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: core_eventstore_v1_eventstore_pb.CreateEventRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<core_eventstore_v1_eventstore_pb.CreateEventResponse>;

}

