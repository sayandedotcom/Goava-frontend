import Button from 'components/button';
import {navbarLists} from 'layout/navbar/navbarLists';
import Countup from 'lib/countup';
import NewTooltip from 'lib/tooltip';
import React from 'react';
import {Link} from 'react-router-dom';

const Demonav = () => {
  return (
    <nav className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between border-gray-200 bg-white p-4 text-black'>
      <Link to='/' className='flex items-center'>
        <h1 className='self-center whitespace-nowrap text-4xl font-semibold'>
          Goava
        </h1>
      </Link>
      {/* <div className='flex items-center md:order-2'>
        <button
          data-collapse-toggle='mobile-menu-2'
          type='button'
          className='ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
          aria-controls='mobile-menu-2'
          aria-expanded='false'>
          <span className='sr-only'>Open main menu</span>
          <svg
            className='h-6 w-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'></path>
          </svg>
        </button>
      </div> */}
      <div
        className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'
        id='mobile-menu-2'>
        <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0'>
          {navbarLists.map(
            ({id, tooltip, component, route}) =>
              id <= 3 && (
                <Link
                  key={id}
                  className='flex items-center justify-center font-semibold text-black no-underline focus:border-b-2 focus:border-black'
                  to={route}>
                  {component}
                </Link>
              )
          )}
          {navbarLists.map(
            ({id, tooltip, component, route}) =>
              id > 3 && (
                <NewTooltip key={id} title={tooltip}>
                  <Link
                    className='relative flex items-center justify-center rounded-[50%] p-2 focus:bg-slate-300'
                    to={route}>
                    {component}
                    <span className='absolute	top-[1px] right-[0px] flex h-5 w-5 items-center justify-center rounded-[50%] bg-red-600 text-xs font-light text-white'>
                      <Countup end={15} duration={4} />
                    </span>
                  </Link>
                </NewTooltip>
              )
          )}
          <Link to='/login' className='flex items-center justify-center'>
            <NewTooltip title='Log In'>
              <Button buttonType='inverted'>Log In</Button>
            </NewTooltip>
          </Link>
          <Link to='/signup' className='flex items-center justify-center'>
            <NewTooltip title='Sign Up'>
              <Button buttonType='inverted'>Sign Up</Button>
            </NewTooltip>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Demonav;
