// these are event properties which should be excluded from
// archiving by setting it to an empty value
export const eventPropertyBlacklist: { [x: string]: string[] } = {
  fungible_token_packet: ['YWNrbm93bGVkZ2VtZW50'],
  'ibccallbackerror-fungible_token_packet': ['ibccallbackerror-error'],
  receive_feechain_verification_packet: ['acknowledgement'],
};
