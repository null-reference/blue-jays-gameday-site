// NOTE: not a comprehensive set of types; just want i wanted
//       to cherry pick from the api responses

import { AbstractGameCode, GameType, Person } from './shared-api-types';

export interface StatsapiGameFeedRes {
  copyright: string;
  gamePk: number;
  link: string;
  gameData: GameData;
  liveData: {
    plays: {
      allPlays: Play[];
    };
    boxscore: Boxscore;
  };
}

export interface GameData {
  game: Game;
  datetime: DateTime;
  status: Status;
  teams: {
    away: TeamDetail;
    home: TeamDetail;
  };
  players: { [key: string]: PlayerDetail };
  venue: Venue;
}

export interface Game {
  pk: number;
  type: GameType;
  doubleHeader: string;
  id: string;
  gamedayType: string;
  tiebreaker: string;
  gameNumber: number;
  calendarEventID: string;
  season: string;
  seasonDisplay: string;
}

export interface DateTime {
  dateTime: string;
  originalDate: string;
  officialDate: string;
  dayNight: string;
  time: string;
  ampm: string;
}

export interface Status {
  abstractGameState: string;
  codedGameState: string;
  detailedState: string;
  statusCode: string;
  startTimeTBD: boolean;
  abstractGameCode: AbstractGameCode;
}

export interface League {
  id: number;
  name: string;
  link: string;
  abbreviation?: string;
}

export interface Division {
  id: number;
  name: string;
  link: string;
}

export interface TeamDetail {
  id: number;
  name: string;
  link: string;
  venue: Venue;
  springLeague: League;
  allStarStatus: string;
  season: number;
  teamCode: string;
  fileCode: string;
  abbreviation: string;
  teamName: string;
  locationName: string;
  firstYearOfPlay: string;
  league: League;
  division: Division;
  sport: League;
  shortName: string;
  franchiseName: string;
  clubName: string;
  active: boolean;
}

export interface PlayerDetail {
  id: number;
  fullName: string;
  link: string;
  firstName: string;
  lastName: string;
  primaryNumber: string;
  birthDate: string;
  currentAge: number;
  birthCity: string;
  birthStateProvince?: string;
  birthCountry: string;
  height: string;
  weight: number;
  active: boolean;
  primaryPosition: Position;
  useName: string;
  middleName?: string;
  boxscoreName: string;
  gender: string;
  isPlayer: boolean;
  isVerified: boolean;
  draftYear: number;
  mlbDebutDate: string;
  batSide: BatSide;
  pitchHand: BatSide;
  nickname?: string;
  pronunciation?: string;
}

export interface BatSide {
  code: string;
  description: string;
}

export interface Position {
  code: string;
  name: string;
  type: string;
  abbreviation: string;
}

export interface Venue {
  id: number;
  name: string;
  link: string;
}

export enum CallCode {
  // NOTE: I extracted these manually; could be missing some!
  Ball = 'B', // no swing
  CalledStrike = 'C', // no swing
  SwingingStrike = 'S', // swing
  Foul = 'F', // swing
  FoulTip = 'T', // swing
  FoulBunt = 'L', // swing
  InPlayNoOut = 'D', // swing
  InPlayOut = 'X', // swing
  InPlayRun = 'E', // swing
  BallInDirt = '*B', // no swing
  HitByPitch = 'H', // no swing
  IntentionalBall = 'VB', // no swing
}

export interface PlayEvent {
  playId: string;
  pitchNumber: number;
  details: {
    call: {
      code: CallCode; // "C" == Called String, "S" == Strike
      description: string;
    };
    description: string;
    ballColor: string;
    trailColor: string;
    isInPlay: boolean;
    isStrike: boolean;
    isBall: boolean;
    type: {
      code: string;
      description: string;
    };
    hasReview: boolean;
  };
  count: Count;
  index: number;
  isPitch: boolean;
  type: string;
}

export interface Count {
  balls: number;
  strikes: number;
  outs: number;
}

export interface PlayAbout {
  atBatIndex: number;
  halfInning: 'top' | 'bottom';
  isTopInning: boolean;
  inning: number;
  startTime: string;
  endTime: string;
  isComplete: boolean;
  isScoringPlay: boolean;
  hasReview: boolean;
  hasOut: boolean;
  captivatingIndex: number;
}

export interface PlayResult {
  type: string; // TODO: make type out of this -> atBat, etc.
  event: string; // TODO: make type out of this -> Strikeout, Single, Lineout, etc.
  eventType: string; // TODO: make type out of this -> strikeout, single, field_out, etc.
  description: string;
  rbi: number;
  awayScore: number;
  homeScore: number;
  isScoringPlay: boolean;
}

export interface Play {
  atBatIndex: number;
  result: PlayResult;
  about: PlayAbout;
  count: Count;
  matchup: {
    batter: PlayerDetail;
    pitcher: PlayerDetail;
  };
  playEvents: PlayEvent[];
  pitchIndex: number[];
}

export interface BoxscoreTeamPlayerGameBattingStats {
  summary: string;
  gamesPlayed: number;
  flyOuts: number;
  groundOuts: number;
  airOuts: number;
  runs: number;
  doubles: number;
  triples: number;
  homeRuns: number;
  strikeOuts: number;
  baseOnBalls: number;
  intentionalWalks: number;
  hits: number;
  hitByPitch: number;
  atBats: number;
  caughtStealing: number;
  stolenBases: number;
  stolenBasePercentage: string;
  groundIntoDoublePlay: number;
  groundIntoTriplePlay: number;
  plateAppearances: number;
  totalBases: number;
  rbi: number;
  leftOnBase: number;
  sacBunts: number;
  sacFlies: number;
  catchersInterference: number;
  pickoffs: number;
  atBatsPerHomeRun: string;
  popOuts: number;
  lineOuts: number;
}

export interface BoxscoreTeamPlayerSeasonBattingStats {
  gamesPlayed: number;
  flyOuts: number;
  groundOuts: number;
  airOuts: number;
  runs: number;
  doubles: number;
  triples: number;
  homeRuns: number;
  strikeOuts: number;
  baseOnBalls: number;
  intentionalWalks: number;
  hits: number;
  hitByPitch: number;
  avg: string;
  atBats: number;
  obp: string;
  slg: string;
  ops: string;
  caughtStealing: number;
  stolenBases: number;
  stolenBasePercentage: string;
  groundIntoDoublePlay: number;
  groundIntoTriplePlay: number;
  totalBases: number;
  rbi: number;
  leftOnBase: number;
  sacBunts: number;
  sacFlies: number;
  babip: string;
  groundOutsToAirouts: string;
  catchersInterference: number;
  pickoffs: number;
  atBatsPerHomeRun: string;
  popOuts: number;
  lineOuts: number;
}

export interface BoxscoreTeamPlayerGamePitchingStats {
  summary: string;
  gamesPlayed: number;
  gamesStarted: number;
  flyOuts: number;
  groundOuts: number;
  airOuts: number;
  runs: number;
  doubles: number;
  triples: number;
  homeRuns: number;
  strikeOuts: number;
  baseOnBalls: number;
  intentionalWalks: number;
  hits: number;
  hitByPitch: number;
  atBats: number;
  caughtStealing: number;
  stolenBases: number;
  stolenBasePercentage: string;
  numberOfPitches: number;
  inningsPitched: string;
  wins: number;
  losses: number;
  saves: number;
  saveOpportunities: number;
  holds: number;
  blownSaves: number;
  earnedRuns: number;
  battersFaced: number;
  outs: number;
  gamesPitched: number;
  completeGames: number;
  shutouts: number;
  pitchesThrown: number;
  balls: number;
  strikes: number;
  strikePercentage: string;
  hitBatsmen: number;
  balks: number;
  wildPitches: number;
  pickoffs: number;
  rbi: number;
  gamesFinished: number;
  runsScoredPer9: string;
  homeRunsPer9: string;
  inheritedRunners: number;
  inheritedRunnersScored: number;
  catchersInterference: number;
  sacBunts: number;
  sacFlies: number;
  passedBall: number;
  popOuts: number;
  lineOuts: number;
}

export interface BoxscoreTeamPlayerSeasonPitchingStats {
  gamesPlayed: number;
  gamesStarted: number;
  flyOuts: number;
  groundOuts: number;
  airOuts: number;
  runs: number;
  doubles: number;
  triples: number;
  homeRuns: number;
  strikeOuts: number;
  baseOnBalls: number;
  intentionalWalks: number;
  hits: number;
  hitByPitch: number;
  atBats: number;
  obp: string;
  caughtStealing: number;
  stolenBases: number;
  stolenBasePercentage: string;
  numberOfPitches: number;
  era: string;
  inningsPitched: string;
  wins: number;
  losses: number;
  saves: number;
  saveOpportunities: number;
  holds: number;
  blownSaves: number;
  earnedRuns: number;
  whip: string;
  battersFaced: number;
  outs: number;
  gamesPitched: number;
  completeGames: number;
  shutouts: number;
  pitchesThrown: number;
  balls: number;
  strikes: number;
  strikePercentage: string;
  hitBatsmen: number;
  balks: number;
  wildPitches: number;
  pickoffs: number;
  groundOutsToAirouts: string;
  rbi: number;
  winPercentage: string;
  pitchesPerInning: string;
  gamesFinished: number;
  strikeoutWalkRatio: string;
  strikeoutsPer9Inn: string;
  walksPer9Inn: string;
  hitsPer9Inn: string;
  runsScoredPer9: string;
  homeRunsPer9: string;
  inheritedRunners: number;
  inheritedRunnersScored: number;
  catchersInterference: number;
  sacBunts: number;
  sacFlies: number;
  passedBall: number;
  popOuts: number;
  lineOuts: number;
}

export interface BoxscoreTeamPlayer {
  parentTeamId: number;
  person: Person;
  jerseyNumber: string;
  position: {
    code: string;
    name: string;
    type: string;
    abbreviation: string;
  };
  status: {
    code: string;
    description: string;
  };
  battingOrder: string; // ex. 100, 101 (101 means off the bench)
  stats: {
    // the mlb api defaults these to "{}" if no stats are available;
    // ex. if the player is a pitcher, these will be empty
    batting: Partial<BoxscoreTeamPlayerGameBattingStats>;
    // the mlb api defaults these to "{}" if no stats are available;
    // ex. if the player is a batter, these will be empty
    pitching: Partial<BoxscoreTeamPlayerGamePitchingStats>;
  };
  seasonStats: {
    batting: BoxscoreTeamPlayerSeasonBattingStats;
    pitching: BoxscoreTeamPlayerSeasonPitchingStats;
  };
}

export interface BoxscoreTeamBrief {
  springLeague: League;
  allStarStatus: string;
  id: number;
  name: string;
  link: string;
}

export interface BoxscoreTeamBattingStats {
  flyOuts: number;
  groundOuts: number;
  airOuts: number;
  runs: number;
  doubles: number;
  triples: number;
  homeRuns: number;
  strikeOuts: number;
  baseOnBalls: number;
  intentionalWalks: number;
  hits: number;
  hitByPitch: number;
  avg: string;
  atBats: number;
  obp: string;
  slg: string;
  ops: string;
  caughtStealing: number;
  stolenBases: number;
  stolenBasePercentage: string;
  groundIntoDoublePlay: number;
  groundIntoTriplePlay: number;
  plateAppearances: number;
  totalBases: number;
  rbi: number;
  leftOnBase: number;
  sacBunts: number;
  sacFlies: number;
  catchersInterference: number;
  pickoffs: number;
  atBatsPerHomeRun: string;
  popOuts: number;
  lineOuts: number;
}

export interface BoxscoreTeamPitchingStats {
  flyOuts: number;
  groundOuts: number;
  airOuts: number;
  runs: number;
  doubles: number;
  triples: number;
  homeRuns: number;
  strikeOuts: number;
  baseOnBalls: number;
  intentionalWalks: number;
  hits: number;
  hitByPitch: number;
  atBats: number;
  obp: string;
  caughtStealing: number;
  stolenBases: number;
  stolenBasePercentage: string;
  numberOfPitches: number;
  era: string;
  inningsPitched: string;
  saveOpportunities: number;
  earnedRuns: number;
  whip: string;
  battersFaced: number;
  outs: number;
  completeGames: number;
  shutouts: number;
  pitchesThrown: number;
  balls: number;
  strikes: number;
  strikePercentage: string;
  hitBatsmen: number;
  balks: number;
  wildPitches: number;
  pickoffs: number;
  groundOutsToAirouts: string;
  rbi: number;
  pitchesPerInning: string;
  runsScoredPer9: string;
  homeRunsPer9: string;
  inheritedRunners: number;
  inheritedRunnersScored: number;
  catchersInterference: number;
  sacBunts: number;
  sacFlies: number;
  passedBall: number;
  popOuts: number;
  lineOuts: number;
}

export interface BoxscoreTeamFieldingStats {
  caughtStealing: number;
  stolenBases: number;
  stolenBasePercentage: string;
  assists: number;
  putOuts: number;
  errors: number;
  chances: number;
  passedBall: number;
  pickoffs: number;
}

export interface BoxscoreTeamStats {
  batting: BoxscoreTeamBattingStats;
  pitching: BoxscoreTeamPitchingStats;
  fielding: BoxscoreTeamFieldingStats;
}

export interface BoxscoreTeam {
  team: BoxscoreTeamBrief;
  teamStats: BoxscoreTeamStats;
  players: { [key: string]: BoxscoreTeamPlayer };
  batters: number[];
  pitchers: number[];
  bench: number[];
  bullpen: number[];
  battingOrder: number[];
  // info: any[];
  // note: any[];
}

export interface Boxscore {
  teams: {
    away: BoxscoreTeam;
    home: BoxscoreTeam;
  };
}
