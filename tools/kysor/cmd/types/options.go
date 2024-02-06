package types

import (
	"fmt"

	commoncmd "github.com/KYVENetwork/kyvejs/common/goutils/cmd"

	querytypes "github.com/KYVENetwork/chain/x/query/types"
)

var (
	CacheOptionJsonFile = NewStringOption("jsonfile")
	CacheOptionMemory   = NewStringOption("memory")
)

type StringOption struct {
	commoncmd.Option[string]
	value string
}

func NewStringOption(value string) StringOption {
	return StringOption{value: value}
}

func (o StringOption) Name() string {
	return o.value
}

func (o StringOption) Value() string {
	return o.value
}

func (o StringOption) StringValue() string {
	return o.value
}

type PoolOption struct {
	commoncmd.Option[uint64]
	value querytypes.PoolResponse
}

func NewPoolOption(pool querytypes.PoolResponse) PoolOption {
	return PoolOption{value: pool}
}

func (o PoolOption) Name() string {
	return fmt.Sprintf("%s (%d)", o.value.GetData().GetName(), o.value.GetData().GetId())
}

func (o PoolOption) Value() uint64 {
	return o.value.GetId()
}

func (o PoolOption) StringValue() string {
	return fmt.Sprintf("%d", o.value.GetData().GetId())
}
