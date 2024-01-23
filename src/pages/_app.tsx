import { type AppType } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { api } from '~/utils/api';

import '~/styles/globals.css';
import { theme } from '~/chakra/theme';
import Navigation from '~/UI/Navigation';

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<ChakraProvider theme={theme}>
            <Navigation/>
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default api.withTRPC(MyApp);
