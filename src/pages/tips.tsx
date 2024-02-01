import { Avatar, Heading, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';
import Creator from '~/assets/Creator';
import { barista } from '~/constants/barista';

const TipsPage = () => {
	return (
		<Stack gap={10}>
        <Head>
            <title>
                Добро кофе: Чаевые
            </title>
        </Head>
			<Heading
				textColor="blackAlpha.700"
				fontSize={18}
				textAlign="center"
			>
				Кому отправить чаевые?
			</Heading>
			<Stack
				direction={['column', 'row']}
				justifyContent="center"
				gap={10}
                mx={[5, null]}
			>
				{barista.map(({ link, name, creator, id, avatar }) => (
					<Stack
						key={id}
						as={motion.a}
						href={link}
						target="_blank"
						whileHover={{
							scale: 1.1,
						}}
						boxShadow="2xl"
						p={5}
						rounded="2xl"
						alignItems="center"
						position="relative"
						_hover={{
							textDecoration: 'none',
						}}
					>
						<Avatar src={avatar} size="2xl" />
						<Text>{name}</Text>
						{creator && (
							<Creator
								position="absolute"
								right="50%"
								bottom="-60%"
								pointerEvents="none"
							/>
						)}
					</Stack>
				))}
			</Stack>
		</Stack>
	);
};

export default TipsPage;
