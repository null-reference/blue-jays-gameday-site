// generated from the api sample file "teams-141.json"
// using quicktype extention in vscode

export interface StatsapiTeamsRes {
  copyright: string;
  teams: Team[];
}

export interface Team {
  springLeague: Division;
  allStarStatus: string;
  id: number;
  name: string;
  link: string;
  season: number;
  venue: Division;
  springVenue: SpringVenue;
  teamCode: string;
  fileCode: string;
  abbreviation: string;
  teamName: string;
  locationName: string;
  firstYearOfPlay: string;
  league: Division;
  division: Division;
  sport: Division;
  shortName: string;
  franchiseName: string;
  clubName: string;
  active: boolean;
}

export interface Division {
  id: number;
  name: string;
  link: string;
  abbreviation?: string;
}

export interface SpringVenue {
  id: number;
  link: string;
}
