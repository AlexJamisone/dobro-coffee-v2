import { Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Yandex = () => {
	return (
		<Center
			as={motion.iframe}
			boxShadow="2xl"
			rounded="2xl"
			initial={{
				y: 200,
				opacity: 0,
			}}
			animate={{ y: 0, opacity: 1 }}
			title="Yandex"
			src="https://yandex.ru/maps-reviews-widget/113115524349?comments"
			mt={5}
			h={['500px', '750px']}
			w={['300px', '750px']}
		/>
	);
};

export default Yandex;
