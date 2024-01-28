import { Center, Skeleton, Stack } from '@chakra-ui/react';
import { api } from '~/utils/api';
import CoffeeCard from './CoffeeCard';
import { useFzf } from '~/hooks/useFzf';

const Coffee = () => {
	const { data: coffees, isLoading } = api.coffee.get.useQuery();
    const enteris = useFzf(coffees)
	return (
		<Center maxH={400} alignItems="flex-start">
			<Stack
				maxH={400}
				overflowY="scroll"
				pb={120}
				px={10}
				gap={3}
				sx={{
					maskImage:
						'linear-gradient(to bottom, black 55%, rgba(0, 0, 0, 0.01) 90%)',
					'::-webkit-scrollbar': {
						display: 'none',
					},
				}}
			>
				{isLoading ? (
					<>
						<Skeleton w={300} h={92} rounded={'2xl'} />
						<Skeleton w={300} h={92} rounded={'2xl'} />
						<Skeleton w={300} h={92} rounded={'2xl'} />
					</>
				) : (
					enteris?.map((coffee) => (
						<CoffeeCard key={coffee.item.id} coffee={coffee.item} />
					))
				)}
			</Stack>
		</Center>
	);
};
export default Coffee;
