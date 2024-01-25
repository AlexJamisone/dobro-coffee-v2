import { create } from 'zustand';
type SearchState = {
	query: string;
	isEmty: boolean;
};
type SearchAction = {
	setQuery: (q: string) => void;
};
type Search = SearchState & SearchAction;

const initial: SearchState = {
	query: '',
	isEmty: true,
};
export const useSearch = create<Search>((set) => ({
	...initial,
	setQuery: (query) =>
		set((state) => ({
			query,
			isEmty: state.query.length === 0 ? true : false,
		})),
}));
