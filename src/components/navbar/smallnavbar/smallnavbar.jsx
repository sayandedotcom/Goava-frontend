import React from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const SmallNavbar = () => {
  return (
    <nav className='mr-3 flex cursor-pointer items-center justify-center md:hidden'>
      <MenuRoundedIcon sx={{fontSize: '40px'}} />
    </nav>
  );
};

export default SmallNavbar;
