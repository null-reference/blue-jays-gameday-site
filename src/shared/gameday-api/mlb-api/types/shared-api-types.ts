export interface Person {
  id: number;
  fullName: string;
  link: string;
}

// R = Regular season
// S = Spring training
// E = Exhibition
// A = All-star game
// D = Division series
// F = First Round (Wild card)
// L = League championship series
// W = World series
export type GameType = 'R' | 'S' | 'E' | 'A' | 'D' | 'F' | 'L' | 'W';

// F: Final, L: Live, P: Preview
export type AbstractGameCode = 'F' | 'L' | 'P';

export enum AbstractGameState {
  Final = 'Final',
  Preview = 'Preview',
  Live = 'Live',
}
