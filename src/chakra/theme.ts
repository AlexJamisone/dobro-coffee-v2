import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const defultTheme: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: true,
	disableTransitionOnChange: false,
};

export const theme = extendTheme({ defultTheme });
