import { Link } from '@chakra-ui/next-js';
import { Box, Button, Heading, Stack } from '@chakra-ui/react';
import Head from 'next/head';
const BonusPage = () => {
	return (
		<Stack justifyContent="center" alignItems="center" mx={5}>
        <Head>
            <title>
                Добро кофе: Бонусы
            </title>
        </Head>
			<Heading
				textAlign="center"
				textColor="blackAlpha.700"
				fontSize="lg"
			>
				Узнать сколько у вас бонусов можно через нашего телеграмм-бота
			</Heading>
			<Box
				as="video"
				src="https://cdnl.iconscout.com/lottie/premium/thumb/telegram-10067423-8218256.mp4"
				loop={true}
				muted
				autoPlay
				w={275}
				h={275}
			/>
			<Button
				as={Link}
				href={'https://t.me/dobrocoffeeSev_bot'}
				target="_blank"
				w="100%"
				_hover={{ textDecoration: 'none' }}
				colorScheme="blue"
			>
				Перейти к боту
			</Button>
		</Stack>
	);
};
export default BonusPage;
