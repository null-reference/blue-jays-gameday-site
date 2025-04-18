// generated from the api sample file "statsapi-schedule-games-res.json"
// using quicktype extention in vscode

import { AbstractGameCode, AbstractGameState, GameType } from './shared-api-types';

export interface StatsapiScheduleGamesRes {
  copyright: string;
  totalItems: number;
  totalEvents: number;
  totalGames: number;
  totalGamesInProgress: number;
  dates: GameDate[];
}

export interface GameDate {
  date: string;
  totalItems: number;
  totalEvents: number;
  totalGames: number;
  totalGamesInProgress: number;
  games: Game[];
  events: any[];
}

export interface Game {
  gamePk: number;
  gameGuid: string;
  link: string;
  gameType: GameType;
  season: string;
  gameDate: string;
  officialDate: string;
  status: Status;
  teams: Teams;
  venue: Venue;
  content: Content;
  isTie?: boolean;
  gameNumber: number;
  publicFacing: boolean;
  doubleHeader: DoubleHeader;
  gamedayType: DoubleHeader;
  tiebreaker: DoubleHeader;
  calendarEventID: string;
  seasonDisplay: string;
  dayNight: DayNight;
  scheduledInnings: number;
  reverseHomeAwayStatus: boolean;
  inningBreakLength: number;
  gamesInSeries: number;
  seriesGameNumber: number;
  seriesDescription: SeriesDescription;
  recordSource: GameType;
  ifNecessary: DoubleHeader;
  ifNecessaryDescription: IfNecessaryDescription;
  description?: string;
}

export interface Content {
  link: string;
}

export enum DayNight {
  Day = 'day',
  Night = 'night',
}

export enum DoubleHeader {
  E = 'E',
  N = 'N',
  P = 'P',
}

export enum IfNecessaryDescription {
  NormalGame = 'Normal Game',
}

export enum SeriesDescription {
  RegularSeason = 'Regular Season',
  SpringTraining = 'Spring Training',
  // TODO: sd - probably need post season here
}

export interface Status {
  abstractGameState: AbstractGameState;
  codedGameState: CodedGameState;
  detailedState: DetailedState;
  statusCode: CodedGameState;
  startTimeTBD: boolean;
  abstractGameCode: AbstractGameCode;
  reason?: string;
}

export enum CodedGameState {
  F = 'F', // Final
  FG = 'FG', // Final -> ended early (ex. rainout)
  FT = 'FT', // Final -> Tie (spring training)
  S = 'S', // Scheduled
}

export enum DetailedState {
  CompletedEarly = 'Completed Early',
  Final = 'Final',
  Scheduled = 'Scheduled',
}

export interface Teams {
  away: TeamGameBrief;
  home: TeamGameBrief;
}

export interface TeamGameBrief {
  leagueRecord: LeagueRecord;
  score?: number;
  team: Team;
  isWinner?: boolean;
  splitSquad: boolean;
  seriesNumber?: number;
}

export interface LeagueRecord {
  wins: number;
  losses: number;
  pct: string;
}

export interface Team {
  id: number;
  name: string;
  link: string;
}

export interface Venue {
  id: number;
  name: string;
  link: string;
}
