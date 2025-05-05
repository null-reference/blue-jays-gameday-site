// Represents basic team info
export interface TeamSummary {
  id: number;
  name: string;
  abbreviation: string;
}

// Represents summary pitcher info
export interface PitcherSummary {
  name: string; // Last name
  wins: number;
  losses: number;
  era: string; // Keep as string since it can be "--.--"
}

// Represents summary batter info for batting order
export interface BattingOrderBatterSummary {
  battingOrder: number;
  name: string; // Last name
  avgLast10: number; // Raw decimal
  avgSeason: number; // Raw decimal
  avgLast10Trending: 'up' | 'down' | 'neutral';
}

// Represents first pitch stats
export interface FirstPitchSummaryStats {
  opportunities: number;
  swingPercentage: number; // Raw decimal
  singlePercentage: number; // Raw decimal
  extraBaseHitPercentage: number; // Raw decimal
}

// Represents a ranked batter with specific stats
export interface RankedBatterStatSummary {
  name: string; // Last name
  statLast10: number;
  statSeason: number;
  trending: 'up' | 'down' | 'neutral';
}

// The main summary object structure
export interface GamedayReport {
  gameInfo: {
    gamePk: number;
    gameDateStr: string; // Formatted date string e.g., "Wednesday, April 16"
    gameTimeStr: string; // Formatted time string e.g., "1:07pm"
    homeTeam: TeamSummary;
    awayTeam: TeamSummary;
    matchupString: string; // e.g., "Braves @ Blue Jays - 1:07pm"
    isJaysHome: boolean;
  };
  teamStats: {
    blueJaysAbbr: string;
    opponentAbbr: string;
    // TODO: this stat should be like "last 20 scores" and i can pull what i need
    last5Scores: Array<{
      // Provide structured data for scores
      gameDate: string; // ISO date string
      blueJaysScore: number;
      opponentScore: number;
      opponentAbbr: string;
    }>;
    avgScoresLast10: {
      // Raw numbers
      jays: number;
      opponent: number;
    };
    avgScoresSeason: {
      // Raw numbers
      jays: number;
      opponent: number;
    };
  };
  pitchers: {
    home: PitcherSummary | null;
    away: PitcherSummary | null;
  };
  battingOrder: BattingOrderBatterSummary[]; // Sorted by batting order
  firstPitch: {
    batterName: string; // Last name
    last10: FirstPitchSummaryStats | null;
    season: FirstPitchSummaryStats;
  } | null; // Can be null if leadoff not found
  rankings: {
    homeruns: RankedBatterStatSummary[]; // Sorted
    rbi: RankedBatterStatSummary[]; // Sorted
    twoPlusHitGames: RankedBatterStatSummary[]; // Sorted
    twoPlusBaseGames: RankedBatterStatSummary[]; // Sorted
    threePlusHitGames: RankedBatterStatSummary[]; // Sorted
    threePlusBaseGames: RankedBatterStatSummary[]; // Sorted
    twoPlusRbiGames: RankedBatterStatSummary[]; // Sorted
    threePlusRbiGames: RankedBatterStatSummary[]; // Sorted
    doubles: RankedBatterStatSummary[]; // Sorted
    triples: RankedBatterStatSummary[]; // Sorted
    stolenBases: RankedBatterStatSummary[]; // Sorted
  };
}
