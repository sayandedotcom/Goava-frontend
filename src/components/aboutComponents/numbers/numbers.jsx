import React from 'react';
import Heading from '../headings/headings';
import Countup from '../../../lib/countup';

const Number = () => {
  return (
    <div>
      <Heading>Our Numbers</Heading>
      <hr className='mt-5 border-2' />
      <div className='mt-5 flex flex-wrap gap-5'>
        <div className='flex flex-col items-center justify-center border-2 p-7'>
          <Countup
            className='text-2xl font-black md:text-5xl'
            end={23000}
            duration={4}
            suffix=' +'
          />
          <p className='text-sm font-black md:text-xl'>Students</p>
        </div>
        <div className='flex flex-col items-center justify-center border-2 p-7'>
          <Countup
            className='text-2xl font-black md:text-5xl'
            end={155}
            duration={4}
            suffix=' +'
          />
          <p className='text-sm font-black md:text-xl'>Courses</p>
        </div>
        <div className='flex flex-col items-center justify-center border-2 p-7'>
          <Countup
            className='text-2xl font-black md:text-5xl'
            end={10}
            duration={4}
            prefix='₹ '
            suffix=' crore +'
          />
          <p className='text-sm font-black md:text-xl'>Profits</p>
        </div>
        <div className='flex flex-col items-center justify-center border-2 p-7'>
          <Countup
            className='text-2xl font-black md:text-5xl'
            end={4.5}
            decimals={1}
            decimal='.'
            duration={4}
            suffix=' +'
          />
          <p className='text-sm font-black md:text-xl'>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Number;
