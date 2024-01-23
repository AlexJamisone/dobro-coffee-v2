import { Center, Skeleton, Stack } from '@chakra-ui/react';
import { api } from '~/utils/api';
import CoffeeCard from './CoffeeCard';

const Coffee = () => {
	const { data: coffees, isLoading } = api.coffee.get.useQuery();
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
						<Skeleton w={336} h={92} rounded={'2xl'} />
						<Skeleton w={336} h={92} rounded={'2xl'} />
						<Skeleton w={336} h={92} rounded={'2xl'} />
					</>
				) : (
					coffees?.map((coffee) => (
						<CoffeeCard key={coffee.id} coffee={coffee} />
					))
				)}
			</Stack>
		</Center>
	);
};
export default Coffee;
