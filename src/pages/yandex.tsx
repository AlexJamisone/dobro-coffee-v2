import { Stack } from '@chakra-ui/react';
import Head from 'next/head';
import Yandex from '~/UI/Yandex';
import YandexRaiting from '~/UI/Yandex/YandexRaiting';

const YandexPage = () => {
	return (
		<Stack justifyContent="center" alignItems="center">
			<Head>
				<title>Добро кофе: Отзывы</title>
			</Head>

			<YandexRaiting />
			<Yandex />
		</Stack>
	);
};
export default YandexPage;
