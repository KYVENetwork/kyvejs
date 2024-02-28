package server

import (
	"fmt"
	"log"
	"net"

	pb "github.com/KYVENetwork/kyvejs/integrations/tendermint-ssync-go/proto/kyverdk/runtime/v1"
	"google.golang.org/grpc"
)

const (
	host = "0.0.0.0"
	port = "50051"
	maxMessageSize int = 2 * 1024 * 1024 * 1024; // 2 GB
)

func StartServer() {
	// Initialize the gRPC server and listen on port 50051
	listener, err := net.Listen("tcp", fmt.Sprintf("%s:%s", host, port))
	if err != nil {
		log.Fatalf("Failed to listen on port 50051: %v", err)
	}

	// Create a new gRPC server instance
	server := grpc.NewServer(grpc.MaxRecvMsgSize(maxMessageSize), grpc.MaxSendMsgSize(maxMessageSize))

	// Register the Tendermint service with the gRPC server
	pb.RegisterRuntimeServiceServer(server, &TendermintSsyncGoServer{})

	// Start serving incoming connections
	fmt.Printf("🌐 TendermintSsyncGoServer is running on on http://%s:%s...\nPress Ctrl + C to exit.\n", host, port)
	err = server.Serve(listener)
	if err != nil {
		log.Fatalf("Failed to serve gRPC server: %v", err)
	}
}
