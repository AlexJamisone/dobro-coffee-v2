import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import MapsWidget from '~/components/MapsWidget';
import { useCity } from '~/store/useCity';

const YandexMaps = () => {
	const city = useCity((state) => state.city);
	return (
		<React.Fragment>
			{city === 'sev' ? (
				<MapsWidget src="https://yandex.ru/map-widget/v1/?ll=33.536667%2C44.627996&mode=poi&poi%5Bpoint%5D=33.536623%2C44.628060&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D113115524349&reviews%5Baspect%5D=3502044050&z=20.99" />
			) : (
				<MapsWidget src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=46.002528%2C51.603865&mode=search&oid=135036901578&ol=biz&z=17.01" />
			)}
		</React.Fragment>
	);
};
export default YandexMaps;
