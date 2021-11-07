export interface ByteUnit {
  value: number;
  readable?: number;
  unit?: ByteUnits;
}
export type ByteUnits = 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB' | 'EB' | 'ZB' | 'YB' ;

export const UnitsDict = {
  0: 'B',
  1: 'KB',
  2: 'MB',
  3: 'GB',
  4: 'TB',
  5: 'PB',
  6: 'EB',
  7: 'ZB',
  8: 'YB',
} as Units;

export interface Units {
  [key:number]: string;
}
