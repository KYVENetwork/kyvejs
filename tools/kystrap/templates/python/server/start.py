from grpclib.server import Server
from grpclib.utils import graceful_exit

from server.server import {{ .name | ToPascal }}Server


async def serve(*, host='0.0.0.0', port=50051):
    server = Server([{{ .name | ToPascal }}Server()])

    # Note: graceful_exit isn't supported in Windows
    with graceful_exit([server]):
        await server.start(host, port)
        print(f'Serving on {host}:{port}')
        await server.wait_closed()
