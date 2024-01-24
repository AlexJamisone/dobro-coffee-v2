import { FaTelegramPlane } from 'react-icons/fa';
import { CiCoffeeBean, CiCoffeeCup} from 'react-icons/ci';
import { FaYandex, FaRubleSign } from 'react-icons/fa6';
import { IconType } from 'react-icons/lib';

export type NavLink = {
	id: number;
	href: string;
	title: string;
	icon: IconType;
	outside: boolean;
	color: string;
};
export const navLinks: NavLink[] = [
	{
		id: 1,
		outside: false,
		title: 'Кофе',
		href: '/',
		icon: CiCoffeeBean,
		color: 'yellow.900',
	},
	{
		id: 2,
		outside: false,
		title: 'Яндекс.Отзывы',
		href: '/yandex',
		icon: FaYandex,
		color: 'red.500',
	},
	{
		id: 3,
		outside: false,
		title: 'Чаевые',
		href: '/tips',
		icon: FaRubleSign,
		color: 'green.500',
	},
	{
		id: 4,
		outside: false,
		title: 'Бонусы',
		href: '/crm',
		icon: FaTelegramPlane,
		color: 'telegram.500',
	},
	{
		id: 5,
		outside: false,
		title: 'Кофейни',
		href: '/about',
		icon: CiCoffeeCup,
		color: 'orange.600',
	},
];
