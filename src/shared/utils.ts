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

export const getTeamLogo = (teamAbbr: string) => {
  // NOTE: logos from -> https://loodibee.com/mlb/
  switch (teamAbbr) {
    case 'ARI':
      return '/team-logos/diamondbacks-300x300.png';
    case 'ATL':
      return '/team-logos/braves-300x300.png';
    case 'BAL':
      return '/team-logos/orioles-300x300.png';
    case 'BOS':
      return '/team-logos/redsox-300x300.png';
    case 'CHC':
      return '/team-logos/cubs-300x300.png';
    case 'CHW':
    case 'CHS':
      return '/team-logos/whitesox-300x300.png';
    case 'CIN':
      return '/team-logos/reds-300x300.png';
    case 'CLE':
      return '/team-logos/guardians-300x300.png';
    case 'COL':
      return '/team-logos/rockies-300x300.png';
    case 'DET':
      return '/team-logos/tigers-300x300.png';
    case 'FLA':
      return '/team-logos/marlins-300x300.png';
    case 'HOU':
      return '/team-logos/astros-300x300.png';
    case 'KAN':
    case 'KCR':
      return '/team-logos/royals-300x300.png';
    case 'LAA':
      return '/team-logos/angels-300x300.png';
    case 'LAD':
      return '/team-logos/dodgers-300x300.png';
    case 'MIL':
      return '/team-logos/brewers-300x300.png';
    case 'MIN':
      return '/team-logos/twins-300x300.png';
    case 'NYM':
      return '/team-logos/mets-300x300.png';
    case 'NYY':
      return '/team-logos/yankees-300x300.png';
    case 'OAK':
      return '/team-logos/athletics-300x300.png';
    case 'PHI':
      return '/team-logos/phillies-300x300.png';
    case 'PIT':
      return '/team-logos/pirates-300x300.png';
    case 'SD':
      return '/team-logos/padres-300x300.png';
    case 'SF':
      return '/team-logos/giants-300x300.png';
    case 'SEA':
      return '/team-logos/mariners-300x300.png';
    case 'STL':
      return '/team-logos/cardinals-300x300.png';
    case 'TB':
      return '/team-logos/rays-300x300.png';
    case 'TEX':
      return '/team-logos/rangers-300x300.png';
    case 'TOR':
      return '/team-logos/bluejays-300x300.png';
    case 'WAS':
      return '/team-logos/marlins-300x300.png';
  }
  return '/team-logos/mlb-300x300.png';
};
