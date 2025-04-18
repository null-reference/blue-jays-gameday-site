import { GamedayReport } from './types';

export const data: GamedayReport = {
  gameInfo: {
    gamePk: 778297,
    gameDateStr: 'Wednesday, April 16',
    gameTimeStr: '1:07pm',
    homeTeam: {
      id: 141,
      name: 'Blue Jays',
      abbreviation: 'TOR',
    },
    awayTeam: {
      id: 144,
      name: 'Braves',
      abbreviation: 'ATL',
    },
    matchupString: 'Braves @ Blue Jays - 1:07pm',
    isJaysHome: true,
  },
  teamStats: {
    blueJaysAbbr: 'TOR',
    opponentAbbr: 'ATL',
    last5Scores: [
      {
        gameDate: '2025-04-16T17:07:00Z',
        blueJaysScore: 3,
        opponentScore: 1,
        opponentAbbr: 'ATL',
      },
      {
        gameDate: '2025-04-15T23:07:00Z',
        blueJaysScore: 6,
        opponentScore: 3,
        opponentAbbr: 'ATL',
      },
      {
        gameDate: '2025-04-14T23:07:00Z',
        blueJaysScore: 4,
        opponentScore: 8,
        opponentAbbr: 'ATL',
      },
      {
        gameDate: '2025-04-13T17:35:00Z',
        blueJaysScore: 7,
        opponentScore: 6,
        opponentAbbr: 'BAL',
      },
      {
        gameDate: '2025-04-12T20:05:00Z',
        blueJaysScore: 4,
        opponentScore: 5,
        opponentAbbr: 'BAL',
      },
    ],
    avgScoresLast10: {
      jays: 4.2,
      opponent: 3.3,
    },
    avgScoresSeason: {
      jays: 4,
      opponent: 3.789473684210526,
    },
  },
  pitchers: {
    home: {
      name: 'Bassitt',
      wins: 2,
      losses: 0,
      era: '0.77',
    },
    away: {
      name: 'Strider',
      wins: 0,
      losses: 1,
      era: '3.60',
    },
  },
  battingOrder: [
    {
      battingOrder: 1,
      name: 'Bichette',
      avgLast10: 0.29545454545454547,
      avgSeason: 0.3048780487804878,
    },
    {
      battingOrder: 2,
      name: 'Guerrero Jr.',
      avgLast10: 0.2972972972972973,
      avgSeason: 0.2916666666666667,
    },
    {
      battingOrder: 3,
      name: 'Santander',
      avgLast10: 0.225,
      avgSeason: 0.21621621621621623,
    },
    {
      battingOrder: 4,
      name: 'Giménez',
      avgLast10: 0.14285714285714285,
      avgSeason: 0.2028985507246377,
    },
    {
      battingOrder: 5,
      name: 'Kirk',
      avgLast10: 0.23076923076923078,
      avgSeason: 0.24074074074074073,
    },
    {
      battingOrder: 6,
      name: 'Roden',
      avgLast10: 0.21428571428571427,
      avgSeason: 0.2653061224489796,
    },
    {
      battingOrder: 7,
      name: 'Clement',
      avgLast10: 0.23076923076923078,
      avgSeason: 0.18604651162790697,
    },
    {
      battingOrder: 8,
      name: 'Barger',
      avgLast10: 0,
      avgSeason: 0,
    },
    {
      battingOrder: 9,
      name: 'Straw',
      avgLast10: 0.3333333333333333,
      avgSeason: 0.3548387096774194,
    },
  ],
  firstPitch: {
    batterName: 'Bichette',
    last10: {
      opportunities: 10,
      swingPercentage: 0.7,
      singlePercentage: 0.1,
      extraBaseHitPercentage: 0.1,
    },
    season: {
      opportunities: 19,
      swingPercentage: 0.47368421052631576,
      singlePercentage: 0.05263157894736842,
      extraBaseHitPercentage: 0.05263157894736842,
    },
  },
  rankings: {
    twoPlusHitGames: [
      {
        name: 'Guerrero Jr.',
        statLast10: 5,
        statSeason: 8,
      },
      {
        name: 'Bichette',
        statLast10: 4,
        statSeason: 8,
      },
      {
        name: 'Kirk',
        statLast10: 4,
        statSeason: 5,
      },
      {
        name: 'Roden',
        statLast10: 2,
        statSeason: 4,
      },
      {
        name: 'Giménez',
        statLast10: 2,
        statSeason: 3,
      },
      {
        name: 'Santander',
        statLast10: 1,
        statSeason: 3,
      },
      {
        name: 'Straw',
        statLast10: 1,
        statSeason: 2,
      },
      {
        name: 'Clement',
        statLast10: 1,
        statSeason: 1,
      },
      {
        name: 'Barger',
        statLast10: 0,
        statSeason: 0,
      },
    ],
    twoPlusBaseGames: [
      {
        name: 'Bichette',
        statLast10: 6,
        statSeason: 10,
      },
      {
        name: 'Guerrero Jr.',
        statLast10: 5,
        statSeason: 10,
      },
      {
        name: 'Santander',
        statLast10: 5,
        statSeason: 7,
      },
      {
        name: 'Kirk',
        statLast10: 4,
        statSeason: 5,
      },
      {
        name: 'Giménez',
        statLast10: 2,
        statSeason: 6,
      },
      {
        name: 'Roden',
        statLast10: 2,
        statSeason: 5,
      },
      {
        name: 'Straw',
        statLast10: 2,
        statSeason: 3,
      },
      {
        name: 'Clement',
        statLast10: 1,
        statSeason: 2,
      },
      {
        name: 'Barger',
        statLast10: 0,
        statSeason: 0,
      },
    ],
    stolenBases: [
      {
        name: 'Giménez',
        statLast10: 5,
        statSeason: 6,
      },
      {
        name: 'Straw',
        statLast10: 2,
        statSeason: 2,
      },
      {
        name: 'Clement',
        statLast10: 1,
        statSeason: 1,
      },
      {
        name: 'Bichette',
        statLast10: 0,
        statSeason: 0,
      },
      {
        name: 'Guerrero Jr.',
        statLast10: 0,
        statSeason: 0,
      },
      {
        name: 'Santander',
        statLast10: 0,
        statSeason: 0,
      },
      {
        name: 'Kirk',
        statLast10: 0,
        statSeason: 0,
      },
      {
        name: 'Roden',
        statLast10: 0,
        statSeason: 0,
      },
      {
        name: 'Barger',
        statLast10: 0,
        statSeason: 0,
      },
    ],
  },
};
