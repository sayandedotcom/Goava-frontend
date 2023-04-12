import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {navbarLists} from 'layout/navbar/navbarLists';
import NewTooltip from 'lib/tooltip';
import Button from 'components/button';
import Countup from 'lib/countup';

const SmallNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className='relative z-50 ml-3 flex cursor-pointer items-center justify-center md:hidden'>
        {!open ? (
          <MenuRoundedIcon
            onClick={() => setOpen(!open)}
            sx={{fontSize: '40px'}}
          />
        ) : (
          <CloseRoundedIcon
            onClick={() => setOpen(!open)}
            sx={{fontSize: '40px'}}
          />
        )}
      </nav>
      <div
        className={`absolute ${
          open ? 'top-[98px]' : 'top-[-100px] hidden'
        }  flex w-full flex-col items-center justify-between bg-slate-400 md:hidden`}>
        {navbarLists.map(
          ({id, name, component, route}) =>
            id <= 3 && (
              <Link
                key={id}
                onClick={() => setOpen(!open)}
                className='flex w-full items-center justify-center gap-2 py-2 font-semibold text-black no-underline hover:bg-slate-500'
                to={route}>
                {component}
                <span>{name}</span>
              </Link>
            )
        )}
        {navbarLists.map(
          ({id, name, component, route}) =>
            id > 3 && (
              <Link
                key={id}
                onClick={() => setOpen(!open)}
                to={route}
                className='flex w-full items-center justify-center gap-2 py-2 font-semibold text-black no-underline hover:bg-slate-500'>
                <span className='relative'>
                  {component}
                  <span className='absolute	top-[-13px] right-[-4px] flex h-5 w-5 items-center justify-center rounded-[50%] bg-red-600 text-xs font-light text-white'>
                    <Countup end={15} duration={4} />
                  </span>
                </span>

                <span>{name}</span>
              </Link>
            )
        )}
      </div>
    </>
  );
};

export default SmallNavbar;
