import { Resource } from "./resource.model";
import { Location } from '@shared/types/location.type';
export interface Municipio extends Resource, Location{ 
    departamento_id: number;
    alcalde: string;
}