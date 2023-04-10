import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../../button/button';
import NewTooltip from '../../tooltip/tooltip';
import {navbarLists} from 'components/navbar/navbarLists';

const LargeNavbar = () => {
  return (
    <nav className='mr-3 ml-auto hidden items-center justify-between gap-6 md:flex'>
      {navbarLists.map(
        ({id, tooltip, component, route}) =>
          id <= 3 && (
            <NewTooltip key={id} title={tooltip}>
              <Link
                className='font-semibold text-black no-underline focus:border-b-2 focus:border-black'
                to={route}>
                {component}
              </Link>
            </NewTooltip>
          )
      )}
      {navbarLists.map(
        ({id, tooltip, component, route}) =>
          id > 3 && (
            <NewTooltip key={id} title={tooltip}>
              <Link
                className='relative flex rounded-[50%] p-2 focus:bg-slate-300'
                to={route}>
                {component}
                <span className='absolute	top-[1px] right-[0px] flex h-5 w-5 items-center justify-center rounded-[50%] bg-red-600 text-xs font-light text-white'>
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
        </>
      )}
    </nav>
  );
};

export default LargeNavbar;
