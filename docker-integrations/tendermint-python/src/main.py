import concurrent.futures
import sys
import os

import grpc

# Add the parent folder to the module search path
parent_folder = "src/protos"
sys.path.append(parent_folder)

from protos import runtime_pb2_grpc
from server import TendermintServer

RUNTIME_SERVER_ADDR = os.getenv('RUNTIME_SERVER_ADDR', '[::]:50051')


def serve():
    server = grpc.server(concurrent.futures.ThreadPoolExecutor())
    runtime_pb2_grpc.add_RuntimeServicer_to_server(TendermintServer(), server)
    server.add_insecure_port(RUNTIME_SERVER_ADDR)
    server.start()
    print(f"Server running at {RUNTIME_SERVER_ADDR}")
    try:
        while True:
            server.wait_for_termination()
    except KeyboardInterrupt:
        print("Server stopped.")
        server.stop(0)


if __name__ == "__main__":
    serve()
