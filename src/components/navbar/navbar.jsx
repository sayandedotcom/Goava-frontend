import React from 'react';
import {Link} from 'react-router-dom';
import LargeNavbar from './largenavbar/largenavbar.jsx';
import {useDispatch} from 'react-redux';
import {fullProgress} from '../../redux/loaderSlice.js';
import NewTooltip from '../tooltip/tooltip.jsx';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <header
      className='nav flex flex-row justify-between w-full z-[101] bg-white fixed top-0 shadow-[0_3px_6px_0_rgb(0_0_0_/_20%)]
      uppercase no-underline h-[100px]
       border-t-[3px] border-b-[#e0e0e0] border-solid border-b '>
      <Link
        className='logo flex items-center justify-center no-underline text-[black] text-[2rem] font-bold px-8 py-0'
        to='/'
        onClick={() => dispatch(fullProgress())}>
        <NewTooltip title='Go Home'>Goava</NewTooltip>
      </Link>
      <LargeNavbar />
    </header>
  );
};

export default Navbar;
