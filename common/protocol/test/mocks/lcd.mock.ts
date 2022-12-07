export const lcd = () =>
  ({
    kyve: {
      query: {
        v1beta1: {
          canVote: jest.fn().mockResolvedValue({
            possible: true,
            reason: "",
          }),
          canPropose: jest.fn().mockResolvedValue({
            possible: true,
            reason: "",
          }),
        },
      },
    },
  } as any);
