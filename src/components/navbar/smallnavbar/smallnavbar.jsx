import React from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const SmallNavbar = () => {
  return (
    <nav className='mr-3 flex cursor-pointer items-center md:hidden'>
      <MenuRoundedIcon />
    </nav>
  );
};

export default SmallNavbar;
