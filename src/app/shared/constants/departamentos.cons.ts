import { Departamento } from "@shared/models/departamento.model";

export const departamentos = {
    1: {
        name: encodeURIComponent('ahuachapán'),
        readable: 'Ahuachapán',
        g_url: 'https://www.google.com/maps/place/Ahuachap%C3%A1n/@13.929065,-89.878679,13z/',
    } as Departamento,
    2: {
        name: 'santa-ana',
        readable: 'Santa Ana',
        g_url: 'https://www.google.com/maps/place/Santa+Ana/@13.9837908,-89.597841,13z/',
    } as Departamento,
    3: {
        name: 'sonsonate',
        readable: 'Sonsonate',
        g_url: 'https://www.google.com/maps/place/Sonsonate/@13.7106387,-89.7659635,13z/',
    } as Departamento,
    4: {
        name: 'chalatenango',
        readable: 'Chalatenango',
        g_url: 'https://www.google.com/maps/place/Chalatenango/@14.0227036,-88.9559561,13z/',
    } as Departamento,
    5: {
        name: 'la-libertad',
        readable: 'La Libertad',
        g_url: 'https://www.google.com/maps/place/La+Libertad/@13.741396,-89.6593841,10z/',
    } as Departamento,
    6: {
        name: 'san-salvador',
        readable: 'San Salvador',
        g_url: 'https://www.google.com/maps/place/San+Salvador/@13.6914684,-89.2852923,12z/',
    } as Departamento,
    7: {
        name: encodeURIComponent('cuscatlán'),
        readable: 'Cuscatlán',
        g_url: 'https://www.google.com/maps/place/Cuscatlan/@13.7772892,-89.0650926,11z/',
    } as Departamento,
    8: {
        name: 'la-paz',
        readable: 'La Paz',
        g_url: 'https://www.google.com/maps/place/La+Paz/@13.4661133,-89.2523816,10z/',
    } as Departamento,
    9: {
        name: encodeURIComponent('cabañas'),
        readable: 'Cabañas',
        g_url: 'https://www.google.com/maps/place/Caba%C3%B1as/@13.8792275,-89.0204232,10z/',
    } as Departamento,
    10: {
        name: 'san-vicente',
        readable: 'San Vicente',
        g_url: 'https://www.google.com/maps/place/San+Vicente/@13.6405866,-88.801431,14z/',
    } as Departamento,
    11: {
        name: encodeURIComponent('usulután'),
        readable: 'Usulután',
        g_url: 'https://www.google.com/maps/place/Usulut%C3%A1n/@13.343273,-88.4602835,14z/',
    } as Departamento,
    12: {
        name: 'san-miguel',
        readable: 'San Miguel',
        g_url: 'https://www.google.com/maps/place/San+Miguel/@13.4785076,-88.2391297,12z/',
    } as Departamento,
    13: {
        name: encodeURIComponent('morazán'),
        readable: 'Morazán',
        g_url: 'https://www.google.com/maps/place/Moraz%C3%A1n/@13.746818,-88.24373,11z/',
    } as Departamento,
    14: {
        name: encodeURIComponent('la-unión'),
        readable: 'La Unión',
        g_url: 'https://www.google.com/maps/place/La+Uni%C3%B3n/@13.3376128,-87.8837163,13z/',
    } as Departamento,

} as {[key:number]: Departamento};