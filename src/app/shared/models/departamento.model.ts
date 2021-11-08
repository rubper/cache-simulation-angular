import { Resource } from './resource.model';
import { Location } from '@shared/types/location.type';
export interface Departamento extends Resource, Location {
    cabecera_id: number;
    municipios: number[];
}