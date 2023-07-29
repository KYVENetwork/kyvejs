import grpc
import concurrent.futures
import password_pb2
import password_pb2_grpc

# Define the dummy records
dummy_records = {
    "passwords": [
        {"id": "153642", "password": "default1", "hashValue": "default", "saltValue": "default"},
        {"id": "234654", "password": "default2", "hashValue": "default", "saltValue": "default"}
    ]
}
IP_ADDR = '[::]:50052'

# Define the PasswordService class to handle gRPC requests
class PasswordService(password_pb2_grpc.PasswordServiceServicer):
    def RetrievePasswords(self, request, context):
        passwords = [
            password_pb2.PasswordDetails(id=password["id"], password=password["password"], hashValue=password["hashValue"], saltValue=password["saltValue"])
            for password in dummy_records["passwords"]
        ]
        return password_pb2.PasswordList(passwords=passwords)

    def AddNewDetails(self, request, context):
        password_details = {
            "id": request.id,
            "password": request.password,
            "hashValue": request.hashValue,
            "saltValue": request.saltValue
        }
        dummy_records["passwords"].append(password_details)
        return password_pb2.PasswordDetails(**password_details)

    def UpdatePasswordDetails(self, request, context):
        details_id = request.id
        target_details = next((details for details in dummy_records["passwords"] if details["id"] == details_id), None)
        if target_details:
            target_details["password"] = request.password
            target_details["hashValue"] = request.hashValue
            target_details["saltValue"] = request.saltValue
            return password_pb2.PasswordDetails(**target_details)
        else:
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details("Password details not found.")
            return password_pb2.PasswordDetails()

def serve():
    server = grpc.server(concurrent.futures.ThreadPoolExecutor())
    password_pb2_grpc.add_PasswordServiceServicer_to_server(PasswordService(), server)
    server.add_insecure_port(IP_ADDR)
    server.start()
    print(f"Server running at {IP_ADDR}")
    try:
        while True:
            # Keep the server alive
            # You can add additional handling here, if needed.
            # For example, a KeyboardInterrupt (Ctrl+C) could be used to stop the server.
            server.wait_for_termination()
    except KeyboardInterrupt:
        print("Server stopped.")
        server.stop(0)

if __name__ == "__main__":
    serve()
