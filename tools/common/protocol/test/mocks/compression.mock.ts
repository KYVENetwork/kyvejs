export const TestNormalCompression = jest.fn().mockImplementation(() => {
  return {
    name: "TestNormalCompression",
    mimeType: "application/json",
    compress: jest
      .fn()
      .mockImplementation((data: Buffer) => Promise.resolve(data)),
    decompress: jest
      .fn()
      .mockImplementation((data: Buffer) => Promise.resolve(data)),
  };
});

export const TestNoCompression = jest.fn().mockImplementation(() => {
  return {
    name: "TestNoCompression",
    mimeType: "application/json",
    compress: jest
      .fn()
      .mockImplementation((data: Buffer) => Promise.resolve(data)),
    decompress: jest
      .fn()
      .mockImplementation((data: Buffer) => Promise.resolve(data)),
  };
});
