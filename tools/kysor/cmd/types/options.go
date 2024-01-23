package types

import (
	"fmt"
	querytypes "github.com/KYVENetwork/chain/x/query/types"
)

var (
	CacheOptionJsonFile = NewStringOption("jsonfile")
	CacheOptionMemory   = NewStringOption("memory")
)

type StringOption struct {
	Option[string]
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

type PoolOption[T uint64] struct {
	Option[T]
	value uint64
	name  string
}

func NewPoolOption(pool querytypes.PoolResponse) PoolOption[uint64] {
	return PoolOption[uint64]{value: pool.GetId(), name: pool.GetData().GetName()}
}

func (o PoolOption[T]) Name() string {
	return fmt.Sprintf("%s (%d)", o.name, o.value)
}

func (o PoolOption[T]) Value() T {
	return (T)(o.value)
}

func (o PoolOption[T]) StringValue() string {
	return fmt.Sprintf("%d", o.value)
}
