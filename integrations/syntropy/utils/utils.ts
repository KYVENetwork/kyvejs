export function isTimestampMoreThan10MinutesAgo(timestamp: number): boolean {
  const currentTimestamp = Math.floor(Date.now() / 1000);

  const differenceInSeconds = currentTimestamp - timestamp;

  return differenceInSeconds > 600;
}