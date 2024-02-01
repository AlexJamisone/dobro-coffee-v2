import { type AppType } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { api } from '~/utils/api';

import '~/styles/globals.css';
import { theme } from '~/chakra/theme';
import Navigation from '~/UI/Navigation';
import Head from 'next/head';
import Script from 'next/script';

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<Script
				async
				src="https://eu.umami.is/script.js"
				data-website-id="95fc99e1-f5f7-40bf-a18d-9ce724683186"
			/>
			<ChakraProvider theme={theme}>
				<Navigation />
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
};

export default api.withTRPC(MyApp);
