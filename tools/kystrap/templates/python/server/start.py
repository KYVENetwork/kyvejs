from grpclib.server import Server
from grpclib.utils import graceful_exit

from server.server import TendermintServer


async def serve(*, host='127.0.0.1', port=50051):
    server = Server([TendermintServer()])

    # Note: graceful_exit isn't supported in Windows
    with graceful_exit([server]):
        await server.start(host, port)
        print(f'Serving on {host}:{port}')
        await server.wait_closed()
