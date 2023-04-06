import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {navbarLists} from 'components/navbar/navbarLists';
import NewTooltip from 'components/tooltip/tooltip';
import Button from 'components/button/button';

const SmallNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className='relative z-50 mr-3 flex cursor-pointer items-center justify-center md:hidden'>
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
          ({id, tooltip, component, route}) =>
            id <= 3 && (
              <NewTooltip title={tooltip}>
                <Link
                  key={id}
                  onClick={() => setOpen(!open)}
                  className='font-semibold text-black no-underline'
                  to={route}>
                  {component}
                </Link>
              </NewTooltip>
            )
        )}
        {navbarLists.map(
          ({id, tooltip, component, route}) =>
            id > 3 && (
              <NewTooltip title={tooltip}>
                <Link
                  key={id}
                  onClick={() => setOpen(!open)}
                  className='relative flex rounded-[50%] bg-[black] p-2'
                  to={route}>
                  {component}
                  <span className='absolute	top-[-5px] right-[-4px] flex h-5 w-5 items-center justify-center rounded-[50%] bg-red-600 text-xs font-light text-white'>
                    1
                  </span>
                </Link>
              </NewTooltip>
            )
        )}
        {document.cookies ? (
          <Link to='/login'>
            <NewTooltip title='Log Out'>
              <Button buttonType='inverted'>Log Out</Button>
            </NewTooltip>
          </Link>
        ) : (
          <>
            <Link to='/login' onClick={() => setOpen(!open)}>
              <NewTooltip title='Log In'>
                <Button buttonType='inverted'>Log In</Button>
              </NewTooltip>
            </Link>
            <Link to='/signup' onClick={() => setOpen(!open)}>
              <NewTooltip title='Sign Up'>
                <Button buttonType='inverted'>Sign Up</Button>
              </NewTooltip>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default SmallNavbar;
