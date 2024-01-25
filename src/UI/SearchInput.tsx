import { Input } from '@chakra-ui/react';
import { useSearch } from '~/store/useSearch';

const SearchInput = () => {
	const query = useSearch((state) => state.query);
	const setQuery = useSearch((state) => state.setQuery);
	return (
		<Input
            mx='auto'
            maxW={230}
			placeholder="Найди свой кофе"
			value={query}
			onChange={(e) => setQuery(e.target.value)}
		/>
	);
};
export default SearchInput;
