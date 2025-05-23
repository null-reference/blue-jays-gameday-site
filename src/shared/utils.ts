/**
 * Ensures a promise takes at least a minimum amount of time to resolve.
 * If the promise resolves before the minimum time, it waits until the minimum time has elapsed.
 * If the promise takes longer than the minimum time, it returns immediately when done.
 *
 * @param promise The promise to execute
 * @param minTimeMs The minimum time in milliseconds that should elapse before returning
 * @returns A promise that resolves with the original promise's result after at least minTimeMs
 */
export async function withMinimumTime<T>(promise: Promise<T>, minTimeMs: number): Promise<T> {
  // create a delay promise that resolves after the minimum time
  const delayPromise = new Promise<void>((resolve) => setTimeout(resolve, minTimeMs));

  // wait for both the original promise and the delay to complete
  const [result] = await Promise.all([promise, delayPromise]);

  return result;
}
