import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

export const navbarLists = [
  {
    id: 1,
    name: 'Home',
    component: <HomeOutlinedIcon style={{fill: 'black', fontSize: '30px'}} />,
    route: '/',
  },
  {
    id: 2,
    name: 'About Us',
    component: (
      <PeopleAltOutlinedIcon style={{fill: 'black', fontSize: '30px'}} />
    ),
    route: '/about',
  },
  {
    id: 3,
    name: 'Courses',
    component: (
      <AutoStoriesOutlinedIcon style={{fill: 'black', fontSize: '30px'}} />
    ),
    route: '/courses',
  },
  {
    id: 4,
    name: 'My Cart',
    component: (
      <ShoppingCartOutlinedIcon style={{fill: 'black', fontSize: '30px'}} />
    ),
    route: '/cart',
  },
  {
    id: 5,
    name: 'My Favourites',
    component: (
      <FavoriteBorderOutlinedIcon style={{fill: 'black', fontSize: '30px'}} />
    ),
    route: '/favourites',
  },
  {
    id: 6,
    name: 'Notifications',
    component: (
      <NotificationsOutlinedIcon style={{fill: 'black', fontSize: '30px'}} />
    ),
    route: '/notifications',
  },
];
