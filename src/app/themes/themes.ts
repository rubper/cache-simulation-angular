export interface ACSTheme {
    main: string;
    accent: string;
    hover: string;
    background: string;
    hoverBackground: string;
    text: string;
    textMain: string;
    hoverText: string;
    hoverTextMain: string;
    mainLight: string;
    ringMain: string;
}

export interface ThemesType {
    [index:string]: ACSTheme;
}

export const themes: ThemesType = {
    light: {
        main: 'bg-red-600',
        accent: 'bg-red-800',
        hover: 'hover:bg-red-700',
        background: 'bg-white',
        hoverBackground: 'hover:bg-gray-50',
        text: 'text-gray-500',
        textMain: 'text-red-500',
        hoverText: 'hover:text-gray-900',
        hoverTextMain: 'hover:text-red-600',
        mainLight: 'bg-red-400',
        ringMain: 'focus:ring-red-500',
    },
    dark: {
        main: 'bg-yellow-600',
        accent: 'bg-yellow-400',
        hover: 'hover:bg-yellow-700',
        background: 'bg-gray-900',
        hoverBackground: 'hover:bg-gray-700',
        text: 'text-gray-200',
        textMain: 'text-yellow-500',
        hoverText: 'hover:text-gray-900',
        hoverTextMain: 'hover:text-yellow-600',
        mainLight: 'bg-indigo-800',
        ringMain: 'focus:ring-yellow-500',
    }
}