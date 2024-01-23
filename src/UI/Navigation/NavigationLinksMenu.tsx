import { Icon, IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { HiOutlineMenu, HiOutlineMenuAlt1 } from 'react-icons/hi';
import { navLinks } from '~/constants/navLinks';
import NavigationLink from './NavigationLink';

const NavigationLinksMenu = () => {
	return (
		<Menu>
			{({ isOpen }) => (
				<>
					<MenuButton
						as={IconButton}
						aria-label="menu"
                        variant={'outline'}
						icon={
							<Icon
								as={isOpen ? HiOutlineMenuAlt1 : HiOutlineMenu}
                                color='blackAlpha.800'
							/>
						}
					/>
                    <MenuList>
                        {navLinks.map(link => (
                            <NavigationLink key={link.id} link={link}/>
                        ))}
                    </MenuList>
				</>
			)}
		</Menu>
	);
};
export default NavigationLinksMenu;
