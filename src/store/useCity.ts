import { create } from 'zustand';
export type CityState = {
	city: 'sev' | 'sar';
};
type CityAction = {
	setCity: (c: CityState['city']) => void;
};
type City = CityState & CityAction;
const initia: CityState = {
	city: 'sev',
};
export const useCity = create<City>((set) => ({
	...initia,
	setCity: (city) => set({ city }),
}));
