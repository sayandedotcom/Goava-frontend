import React from 'react';

const Radio = ({value, ...otherProps}) => {
  return (
    <div className='flex items-center justify-start p-1'>
      <input
        className='w-8 cursor-pointer'
        type='checkbox'
        value={value}
        {...otherProps}
      />
      <span className='text-xl font-bold'>{value}</span>
    </div>
  );
};

export default Radio;
