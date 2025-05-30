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

export type LogoSize = 64 | 300;

export const getTeamLogo = (teamAbbr: string, logoSize: LogoSize = 64) => {
  const sizeSuffix = logoSize === 300 ? '300x300' : '64x64';

  // NOTE: logos from -> https://loodibee.com/mlb/
  switch (teamAbbr) {
    case 'ARI':
      return `/team-logos/diamondbacks-${sizeSuffix}.png`;
    case 'ATL':
      return `/team-logos/braves-${sizeSuffix}.png`;
    case 'BAL':
      return `/team-logos/orioles-${sizeSuffix}.png`;
    case 'BOS':
      return `/team-logos/redsox-${sizeSuffix}.png`;
    case 'CHC':
      return `/team-logos/cubs-${sizeSuffix}.png`;
    case 'CHW':
    case 'CHS':
      return `/team-logos/whitesox-${sizeSuffix}.png`;
    case 'CIN':
      return `/team-logos/reds-${sizeSuffix}.png`;
    case 'CLE':
      return `/team-logos/guardians-${sizeSuffix}.png`;
    case 'COL':
      return `/team-logos/rockies-${sizeSuffix}.png`;
    case 'DET':
      return `/team-logos/tigers-${sizeSuffix}.png`;
    case 'FLA':
      return `/team-logos/marlins-${sizeSuffix}.png`;
    case 'HOU':
      return `/team-logos/astros-${sizeSuffix}.png`;
    case 'KAN':
    case 'KCR':
      return `/team-logos/royals-${sizeSuffix}.png`;
    case 'LAA':
      return `/team-logos/angels-${sizeSuffix}.png`;
    case 'LAD':
      return `/team-logos/dodgers-${sizeSuffix}.png`;
    case 'MIL':
      return `/team-logos/brewers-${sizeSuffix}.png`;
    case 'MIN':
      return `/team-logos/twins-${sizeSuffix}.png`;
    case 'NYM':
      return `/team-logos/mets-${sizeSuffix}.png`;
    case 'NYY':
      return `/team-logos/yankees-${sizeSuffix}.png`;
    case 'OAK':
    case 'ATH':
      return `/team-logos/athletics-${sizeSuffix}.png`;
    case 'PHI':
      return `/team-logos/phillies-${sizeSuffix}.png`;
    case 'PIT':
      return `/team-logos/pirates-${sizeSuffix}.png`;
    case 'SD':
      return `/team-logos/padres-${sizeSuffix}.png`;
    case 'SF':
      return `/team-logos/giants-${sizeSuffix}.png`;
    case 'SEA':
      return `/team-logos/mariners-${sizeSuffix}.png`;
    case 'STL':
      return `/team-logos/cardinals-${sizeSuffix}.png`;
    case 'TB':
      return `/team-logos/rays-${sizeSuffix}.png`;
    case 'TEX':
      return `/team-logos/rangers-${sizeSuffix}.png`;
    case 'TOR':
      return `/team-logos/bluejays-${sizeSuffix}.png`;
    case 'WAS':
      return `/team-logos/marlins-${sizeSuffix}.png`;
  }
  return `/team-logos/mlb-${sizeSuffix}.png`;
};
