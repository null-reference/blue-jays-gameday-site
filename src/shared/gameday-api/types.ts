import { GameType, Person } from './mlb-api/types/shared-api-types';

interface TeamBrief {
  id: number;
  name: string;
  teamName: string;
  abbreviation: string;
}

interface GameAnalysisGame {
  gamePk: number;
  gameType: GameType;
  gameDate: string;
  season: string;
}

interface FirstPitchOfGameSeasonStat {
  opportunities: number;
  swings: number;
  singles: number;
  extraBaseHits: number;
  swingPercentage: number;
  singlePercentage: number;
  extraBaseHitPercentage: number;
}

interface TeamSeasonStats {
  wins: number;
  losses: number;
  winPercentage: number;
  gamesPlayed: number;
  runsScored: number;
  runsAllowed: number;
  avgRunsScoredPerGame: number;
  avgRunsAllowedPerGame: number;
  gameResults: {
    [gamePk: string]: {
      game: GameAnalysisGame;
      opponent: TeamBrief;
      win: boolean;
      runsScored: number;
      runsAllowed: number;
    };
  };
}

interface PlayerSeasonStats {
  gamesPlayed: number;
  firstPitchOfGame: FirstPitchOfGameSeasonStat;

  atBats: number;
  hits: number;
  battingAvg: number;
  singles: number;
  doubles: number;
  triples: number;
  homeRuns: number;
  rbi: number;
  avgHitsPerGame: number;
  avgSinglesPerGame: number;
  avgDoublesPerGame: number;
  avgTriplesPerGame: number;
  avgHomeRunsPerGame: number;
  hitGames02: number;
  hitGames03: number;
  hitGames04: number;
  hitGames05: number;
  hitGames02Plus: number;
  hitGames03Plus: number;
  hitGames04Plus: number;
  hitGames05Plus: number;

  totalBases: number;
  avgBasesPerGame: number;
  baseGames02: number;
  baseGames03: number;
  baseGames04: number;
  baseGames05: number;
  baseGames06: number;
  baseGames07: number;
  baseGames08: number;
  baseGames09: number;
  baseGames10: number;
  baseGames02Plus: number;
  baseGames03Plus: number;
  baseGames04Plus: number;
  baseGames05Plus: number;
  baseGames06Plus: number;
  baseGames07Plus: number;
  baseGames08Plus: number;
  baseGames09Plus: number;
  baseGames10Plus: number;

  stolenBaseAttempts: number;
  stolenBases: number;
  caughtStealing: number;
  pickoffs: number;
  // TODO: sd - gameday - this REALLY should not be nullable
  //       but the data that comes back from the api has it nullable...
  //       how is it being saved as null in gameday app?
  stolenBasePercentage: number | null;
}

interface GameLineupStatsBatter {
  battingOrder: number;
  person: Person;
  seasonStats: PlayerSeasonStats;
  statsLast10Games: PlayerSeasonStats;
}

export interface GameLineupStats {
  gamePk: number;
  gameDate: string;
  season: string;
  jaysAtHome: boolean;
  blueJays: {
    team: TeamBrief;
    teamStats: {
      seasonStats: TeamSeasonStats;
      statsLast10Games: TeamSeasonStats;
    };
    batters: GameLineupStatsBatter[];
    pitchers: {
      pitchingOrder: number;
      person: Person;
      era: string;
      wins: number;
      losses: number;
    }[];
  };
  opponent: {
    team: TeamBrief;
    // NOTE: i don't set opponent stats; just here for symmetry but made optional
    teamStats?: {
      seasonStats: TeamSeasonStats;
      statsLast10Games: TeamSeasonStats;
    };
    // just need the opposing pitcher for lineup report; hacking it on here
    pitchers: {
      pitchingOrder: number;
      person: Person;
      era: string;
      wins: number;
      losses: number;
    }[];
  };
}
