package main

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/docker-integrations/tendermint-go/protos"
	"google.golang.org/grpc"
	"log"
	"net"
)

func main() {
	// Initialize the gRPC server and listen on port 50051
	fmt.Println("Initializing Tendermint runtime as a gRPC Server...")
	listener, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("Failed to listen on port 50051: %v", err)
	}

	// Create a new gRPC server instance
	s := grpc.NewServer()

	// Register the Tendermint service with the gRPC server
	protos.RegisterRuntimeServer(s, &Tendermint{})

	// Start serving incoming connections
	fmt.Printf("gRPC Server is running...\nPress Ctrl + C to exit.\n")
	err = s.Serve(listener)
	if err != nil {
		log.Fatalf("Failed to serve gRPC server: %v", err)
	}
}
