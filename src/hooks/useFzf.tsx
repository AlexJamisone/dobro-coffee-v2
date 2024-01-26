import { Fzf } from 'fzf';
import { useMemo } from 'react';
import { useSearch } from '~/store/useSearch';
import { Coffee } from '~/server/api/routers/coffee';

export function useFzf(input: Coffee[] | undefined) {
	const query = useSearch((state) => state.query);
	const fzf = useMemo(() => {
		if (input) {
			return new Fzf(input, {
				selector: (item) => item.name,
			});
		}
		return null;
	}, [input]);
	const enteris = useMemo(() => {
		if (fzf) {
			return fzf.find(query);
		}
	}, [fzf, query, input]);
	return enteris;
}
