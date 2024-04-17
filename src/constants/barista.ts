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
		link: 'https://www.tinkoff.ru/cf/142W441ULA3',
		avatar: '/static/sasha.png',
	},
	{
		id: 2,
		name: 'Оля',
		link: 'https://www.tinkoff.ru/cf/2UBOx4Pfur8',
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
