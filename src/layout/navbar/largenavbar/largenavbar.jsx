import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../../../components/button';
import NewTooltip from '../../../lib/tooltip';
import {navbarLists} from 'layout/navbar/navbarLists';
import Countup from 'lib/countup';

const LargeNavbar = () => {
  return (
    <nav className='mr-3 ml-auto hidden items-center justify-between gap-6 md:flex'>
      {navbarLists.map(
        ({id, name, component, route}) =>
          id <= 3 && (
            <NewTooltip key={id} title={name}>
              <Link
                className='font-semibold text-black no-underline focus:border-b-2 focus:border-black'
                to={route}>
                {name}
              </Link>
            </NewTooltip>
          )
      )}
      {navbarLists.map(
        ({id, name, component, route}) =>
          id > 3 && (
            <NewTooltip key={id} title={name}>
              <Link
                className='relative flex rounded-[50%] p-2 focus:bg-slate-300'
                to={route}>
                {component}
                <span className='absolute	top-[1px] right-[0px] flex h-5 w-5 items-center justify-center rounded-[50%] bg-red-600 text-xs font-light text-white'>
                  <Countup end={15} duration={4} />
                </span>
              </Link>
            </NewTooltip>
          )
      )}
    </nav>
  );
};

export default LargeNavbar;
