import React from 'react';
import CountUp from 'react-countup';

const Countup = ({start, end, duration, decimals, decimal, prefix, suffix}) => {
  return (
    <CountUp
      className='text-2xl font-black md:text-5xl'
      start={start}
      end={end}
      decimals={decimals}
      decimal={decimal}
      duration={duration}
      prefix={prefix}
      suffix={suffix}
    />
  );
};

export default Countup;
