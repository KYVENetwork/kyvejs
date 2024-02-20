module github.com/KYVENetwork/kyvejs/integrations/{{ .name }}

go {{ .lang.go.version.patch }}

require (
	google.golang.org/grpc v1.59.0
	google.golang.org/protobuf v1.31.0
	github.com/KYVENetwork/chain v1.4.0
)

// https://github.com/cosmos/cosmos-sdk/issues/8469
replace github.com/gogo/protobuf => github.com/regen-network/protobuf v1.3.3-alpha.regen.1
