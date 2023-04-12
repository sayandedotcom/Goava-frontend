import React from 'react';

const UserIcon = () => {
  return (
    <div className='flex items-center md:order-2'>
      <button
        type='button'
        className='mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0'
        id='user-menu-button'
        aria-expanded='false'
        data-dropdown-toggle='user-dropdown'
        data-dropdown-placement='bottom'>
        <span className='sr-only'>Open user menu</span>
        <img
          className='h-8 w-8 rounded-full'
          src='/docs/images/people/profile-picture-3.jpg'
          alt='user photo'
        />
      </button>
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
    </div>
  );
};

export default UserIcon;
