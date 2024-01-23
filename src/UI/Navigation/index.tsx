import { Stack } from '@chakra-ui/react';
import Logo from '~/assets/Logo';
import NavigationLinksMenu from './NavigationLinksMenu';

const Navigation = () => {
	return (
		<Stack as="header" alignItems="center">
			<Stack as={'nav'} direction={'row'} alignItems={'center'} gap={10}>
				<Logo />
				<NavigationLinksMenu />
			</Stack>
		</Stack>
	);
};
export default Navigation;
