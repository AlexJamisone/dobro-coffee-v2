import { Stack } from '@chakra-ui/react';
import Head from 'next/head';
import Coffee from '~/UI/Coffee';
import SearchInput from '~/UI/SearchInput';

export default function Home() {
	return (
		<>
        <Head>
            <title>Добро Кофе: Кофейня в Севастополе на северной</title>
            <meta name='description' content='Добро Кофе – уютная кофейня на северной стороне Севастополя. Наслаждайтесь атмосферой и разнообразным выбором кофейных напитков. Приглашаем вас на чашечку вкусного кофе в Добро Кофе.'/>
            <meta name="keywords" content="Добро Кофе, кофейня, Севастополь, кофе, кафе, напитки, уют, заведение, северная сторона, захарова, кофейня на северной"/>
        </Head>
			<Stack
				as="main"
				alignItems="center"
				justifyContent="center"
				gap={10}
			>
				<SearchInput />
				<Coffee />
			</Stack>
		</>
	);
}
