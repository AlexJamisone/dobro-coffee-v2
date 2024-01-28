import { Center, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const YandexRaiting = () => {
	const { colorMode } = useColorMode();
	return (
		<Center
			as={motion.iframe}
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
					type: 'spring',
					duration: 0.5,
				},
			}}
            boxShadow='lg'
			src={`https://yandex.ru/sprav/widget/rating-badge/113115524349?type=award${colorMode === 'dark' ? '&theme=dark' : ''}`}
            w={150}
            h={50}
		/>
	);
};
export default YandexRaiting;
