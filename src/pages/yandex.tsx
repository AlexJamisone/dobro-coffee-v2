import { Center, Stack } from '@chakra-ui/react';
import Yandex from '~/UI/Yandex';
import YandexRaiting from '~/UI/Yandex/YandexRaiting';

const YandexPage = () => {
	return (
		<Stack justifyContent='center' alignItems='center'>
            <YandexRaiting/>
			<Yandex />
		</Stack>
	);
};
export default YandexPage;
