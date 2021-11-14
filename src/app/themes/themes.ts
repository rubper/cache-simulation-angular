export interface ACSTheme {
    main: string;
    accent: string;
    hover: string;
    background: string;
    hoverBackground: string;
    text: string;
    hoverText: string;
    mainLight: string;
}

export interface ThemesType {
    [index:string]: ACSTheme;
}

export const themes: ThemesType = {
    light: {
        main: 'bg-indigo-600',
        accent: 'bg-indigo-800',
        hover: 'hover:bg-indigo-700',
        background: 'bg-white',
        hoverBackground: 'hover:bg-gray-50',
        text: 'text-gray-500',
        hoverText: 'hover:text-gray-900',
        mainLight: 'bg-indigo-400',
    },
    dark: {
        main: 'bg-yellow-600',
        accent: 'bg-yellow-400',
        hover: 'hover:bg-yellow-700',
        background: 'bg-gray-900',
        hoverBackground: 'hover:bg-gray-700',
        text: 'text-gray-200',
        hoverText: 'hover:text-gray-900',
        mainLight: 'bg-indigo-800',
    }
}