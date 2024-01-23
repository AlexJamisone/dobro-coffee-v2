import { Link } from '@chakra-ui/next-js';
import { Icon, MenuItem, useBoolean } from '@chakra-ui/react';
import { NavLink } from '~/constants/navLinks';

type NavigationLinkProps = {
	link: NavLink;
};
const NavigationLink = ({ link }: NavigationLinkProps) => {
	const { outside, href, title, icon, color } = link;
	const [hov, setHov] = useBoolean();
	return (
		<MenuItem
			as={Link}
			href={href}
			target={outside ? '_blank' : undefined}
			_hover={{
				textDecoration: 'none',
			}}
			display="flex"
			alignItems="center"
			gap={3}
			onMouseEnter={setHov.on}
			onMouseLeave={setHov.off}
		>
			<Icon
				as={icon}
				color={hov ? color : 'gray.900'}
				transition="all .2s ease-in-out"
                boxSize={hov ? 5 : undefined}
			/>
			{title}
		</MenuItem>
	);
};
export default NavigationLink;
