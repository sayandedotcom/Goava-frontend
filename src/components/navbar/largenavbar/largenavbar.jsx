import React from 'react';
import {Link} from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Button from '../../button/button';
import NewTooltip from '../../tooltip/tooltip';

const navbar = [
  {id: 1, component: 'home', route: '/'},
  {id: 2, component: 'about us', route: '/about'},
  {id: 3, component: 'courses', route: '/courses'},
];
const navbarIcons = [
  {
    id: 4,
    tooltip: 'My Cart',
    component: <ShoppingCartOutlinedIcon style={{fill: 'white'}} />,
    route: '/cart',
  },
  {
    id: 5,
    tooltip: 'My Favourites',
    component: <FavoriteBorderOutlinedIcon style={{fill: 'white'}} />,
    route: '/favourites',
  },
  {
    id: 6,
    tooltip: 'Notifications',
    component: <NotificationsOutlinedIcon style={{fill: 'white'}} />,
    route: '/notifications',
  },
];

const LargeNavbar = () => {
  return (
    <nav className='mr-3 hidden items-center justify-between gap-6 md:flex'>
      {navbar.map(({id, component, route}) => (
        <NewTooltip
          title={component.charAt(0).toUpperCase() + component.slice(1)}>
          <Link
            key={id}
            className='font-semibold text-black no-underline'
            to={route}>
            {component}
          </Link>
        </NewTooltip>
      ))}
      {navbarIcons.map(({id, tooltip, component, route}) => (
        <NewTooltip title={tooltip}>
          <Link
            key={id}
            className='flex rounded-[50%] bg-[black] p-2'
            to={route}>
            {component}
          </Link>
        </NewTooltip>
      ))}
      <Link to='/login'>
        <NewTooltip title='Log In'>
          <Button buttonType='inverted'>Log In</Button>
        </NewTooltip>
      </Link>
      <Link to='/signup'>
        <NewTooltip title='Sign Up'>
          <Button buttonType='inverted'>Sign Up</Button>
        </NewTooltip>
      </Link>
    </nav>
  );
};

export default LargeNavbar;
