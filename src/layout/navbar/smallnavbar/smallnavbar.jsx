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
          open ? 'top-[96px]' : 'top-[-96px] hidden'
        }  flex w-full flex-col items-center justify-around gap-5 bg-slate-400 py-4 md:hidden`}>
        {navbarLists.map(
          ({id, name, component, route}) =>
            id <= 3 && (
              <NewTooltip key={id} title={name}>
                <Link
                  onClick={() => setOpen(!open)}
                  className='font-semibold text-black no-underline'
                  to={route}>
                  {component}
                  <span>{name}</span>
                </Link>
              </NewTooltip>
            )
        )}
        {navbarLists.map(
          ({id, name, component, route}) =>
            id > 3 && (
              <NewTooltip key={id} title={name}>
                <Link onClick={() => setOpen(!open)} to={route}>
                  <span className='relative'>
                    {component}
                    <span className='absolute	top-[-13px] right-[-4px] flex h-5 w-5 items-center justify-center rounded-[50%] bg-red-600 text-xs font-light text-white'>
                      <Countup end={15} duration={4} />
                    </span>
                  </span>

                  <span>{name}</span>
                </Link>
              </NewTooltip>
            )
        )}
      </div>
    </>
  );
};

export default SmallNavbar;
