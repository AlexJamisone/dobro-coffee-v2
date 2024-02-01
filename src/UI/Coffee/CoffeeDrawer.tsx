import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	Image,
	Stack,
	Text,
} from '@chakra-ui/react';
import { Coffee } from '~/server/api/routers/coffee';

type CoffeeDrawerProps = {
	isOpen: boolean;
	onClose: () => void;
	coffee: Coffee;
};
const CoffeeDrawer = ({ isOpen, onClose, coffee }: CoffeeDrawerProps) => {
	return (
		<Drawer
			isOpen={isOpen}
			onClose={onClose}
			placement="bottom"
			size={'full'}
		>
			<DrawerContent textAlign={'center'}>
				<DrawerCloseButton />
				<DrawerHeader>
                    {coffee.name}
				</DrawerHeader>
				<DrawerBody as={Stack} gap={3}>
					<Image
						mx="auto"
						src={coffee.img}
						alt={coffee.name}
						w={250}
						h={250}
					/>
					<Text fontWeight={600} fontSize={'2xl'}>
						{coffee.price} ₽
					</Text>
					<Stack>
						{coffee.info.map((item) => (
							<Text key={item.id}>
								{item.key} {item.value}
							</Text>
						))}
					</Stack>
					<Stack gap={[1, 3]}>
						{coffee.description.map((line, idx) => (
							<Text key={idx} textColor="blackAlpha.700">
								{line}
							</Text>
						))}
					</Stack>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};

export default CoffeeDrawer;
