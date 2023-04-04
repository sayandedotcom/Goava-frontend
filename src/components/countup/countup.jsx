import React from 'react';
import CountUp from 'react-countup';

const Countup = ({start, end, duration, decimals, decimal, prefix, suffix}) => {
  return (
    <CountUp
      className='font-black	text-5xl'
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
