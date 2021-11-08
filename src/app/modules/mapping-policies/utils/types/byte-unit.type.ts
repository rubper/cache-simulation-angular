export interface ByteUnit {
  value: number;
  readable?: number;
  unit?: ByteUnits;
}
export type ByteUnits = 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB' | 'EB' | 'ZB' | 'YB' ;

export const UnitsDict: ReadonlyArray<ByteUnits> = [
  'B',
  'KB',
  'MB',
  'GB',
  'TB',
  'PB',
  'EB',
  'ZB',
  'YB',
 ];

export interface Units {
  [key:number]: string;
}
