import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MapsWidget = ({ src }: { src: string }) => {
	return (
		<Box
			boxShadow="2xl"
			rounded="2xl"
			initial={{
				opacity: 0,
				y: 200,
			}}
			animate={{
				opacity: 1,
				y: 0,
				transition: {
					type: 'spring',
					duration: 0.5,
				},
			}}
			as={motion.iframe}
			src={src}
			width="560"
			height="400"
			frameBorder="1"
			allowFullScreen
		/>
	);
};
export default MapsWidget;
