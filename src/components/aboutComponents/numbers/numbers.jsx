import React from 'react';
import Heading from '../headings/headings';
import Countup from '../../countup/countup';

const Number = () => {
  return (
    <div>
      <Heading id='#numbers'>Our Numbers</Heading>
      <hr className='border-4 mt-5' />
      <div className='flex flex-wrap mt-5 gap-5'>
        <div className='flex flex-col justify-center items-center p-7 border-2'>
          <Countup end={23000} duration={4} suffix=' +' />
          <h1 className='text-xl font-black'>Students</h1>
        </div>
        <div className='flex flex-col justify-center items-center p-7 border-2'>
          <Countup end={155} duration={4} suffix=' +' />
          <h1 className='text-xl font-black'>Courses</h1>
        </div>
        <div className='flex flex-col justify-center items-center p-7 border-2'>
          <Countup end={10} duration={4} prefix='₹ ' suffix=' crore +' />
          <h1 className='text-xl font-black'>Profits</h1>
        </div>
        <div className='flex flex-col justify-center items-center p-7 border-2'>
          <Countup
            end={4.5}
            decimals={1}
            decimal='.'
            duration={4}
            suffix=' +'
          />
          <h1 className='text-xl font-black'>Rating</h1>
        </div>
      </div>
    </div>
  );
};

export default Number;
