import { ByteUnit } from "./byte-unit.type";

export interface ConfigData {
    memory: string;
    cache?: string | SetAssociativeConfig;
    blocksize: string;
    _type: 'd' | 'a' | 's';
  }

  export interface SetAssociativeConfig {sets:ByteUnit; ways: ByteUnit;};