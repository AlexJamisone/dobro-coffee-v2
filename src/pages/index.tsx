import {  Stack } from '@chakra-ui/react';
import Coffee from '~/UI/Coffee';
import SearchInput from '~/UI/SearchInput';

export default function Home() {
	return (
		<Stack as="main" alignItems='center' justifyContent='center' gap={10} >
			<SearchInput />
			<Coffee />
		</Stack>
	);
}
