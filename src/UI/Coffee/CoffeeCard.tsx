import { Image, Skeleton, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Coffee } from '~/server/api/routers/coffee';
import CoffeeDrawer from './CoffeeDrawer';
type CoffeeCardProps = {
	coffee: Coffee;
};
const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
    const {isOpen, onClose, onToggle} = useDisclosure()
	return (
		<Stack
            as={motion.div}
            whileHover={{
                scale: 1.1,
                transition: {
                    type: "spring",
                    duration: 0.2,
                    stiffness: 300
                }
            }}
			cursor="pointer"
			px={5}
			py={2}
			rounded="2xl"
			direction={'row'}
			boxShadow={'lg'}
			alignItems="center"
			justifyContent="space-between"
			fontSize={14}
            onClick={onToggle}
		>
			<Image
				src={coffee.img}
				alt={coffee.name}
				fallback={<Skeleton w={75} h={75} rounded="base" />}
				w={75}
				h={75}
			/>
			<Text>{coffee.name}</Text>
			<Text>{coffee.price} ₽</Text>
            <CoffeeDrawer coffee={coffee} isOpen={isOpen} onClose={onClose}/>
		</Stack>
	);
};

export default CoffeeCard;
