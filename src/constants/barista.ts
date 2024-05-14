type Barista = {
	id: number;
	name: string;
	link: string;
	avatar: string;
	creator?: boolean;
};
export const barista: Barista[] = [
	{
		id: 1,
		name: 'Саша',
		link: 'https://www.tinkoff.ru/rm/bakhmanov.aleksandr2/4PXEg7008',
		avatar: '/static/sasha.png',
	},
	{
		id: 2,
		name: 'Оля',
		link: 'https://www.tinkoff.ru/cf/4cbbaoHREON',
		avatar: '/static/oli.jpg',
	},
	{
		id: 3,
		name: 'Лёша',
		link: 'https://www.tinkoff.ru/cf/5Y94azSjVDD',
		avatar: '/static/alex.png',
		creator: true,
	},
];
