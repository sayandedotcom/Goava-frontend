import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

export const navbarLists = [
  {id: 1, tooltip: 'Home', component: 'Home', route: '/'},
  {id: 2, tooltip: 'About Us', component: 'About Us', route: '/about'},
  {id: 3, tooltip: 'Courses', component: 'Courses', route: '/courses'},
  {
    id: 4,
    tooltip: 'My Cart',
    component: (
      <ShoppingCartOutlinedIcon style={{fill: 'black', fontSize: '30px'}} />
    ),
    route: '/cart',
  },
  {
    id: 5,
    tooltip: 'My Favourites',
    component: (
      <FavoriteBorderOutlinedIcon style={{fill: 'black', fontSize: '30px'}} />
    ),
    route: '/favourites',
  },
  {
    id: 6,
    tooltip: 'Notifications',
    component: (
      <NotificationsOutlinedIcon style={{fill: 'black', fontSize: '30px'}} />
    ),
    route: '/notifications',
  },
];
