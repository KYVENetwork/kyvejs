package server

import (
	"fmt"
	pb "github.com/KYVENetwork/kyvejs/integrations/tendermint-go/proto/kyverdk/runtime/v1"
	"google.golang.org/grpc"
	"log"
	"net"
)

const (
	host = "0.0.0.0"
	port = "50051"
)

func StartServer() {
	// Initialize the gRPC server and listen on port 50051
	listener, err := net.Listen("tcp", fmt.Sprintf("%s:%s", host, port))
	if err != nil {
		log.Fatalf("Failed to listen on port 50051: %v", err)
	}

	// Create a new gRPC server instance
	server := grpc.NewServer()

	// Register the Tendermint service with the gRPC server
	pb.RegisterRuntimeServiceServer(server, &TendermintGoServer{})

	// Start serving incoming connections
	fmt.Printf(fmt.Sprintf("🌐 TendermintGoServer is running on on http://%s:%s...\nPress Ctrl + C to exit.\n", host, port))
	err = server.Serve(listener)
	if err != nil {
		log.Fatalf("Failed to serve gRPC server: %v", err)
	}
}
