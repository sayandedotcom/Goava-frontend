import React from 'react';
import {Link} from 'react-router-dom';

const Heading = ({children}) => {
  return <Link className='text-2xl font-black md:text-4xl'>{children}</Link>;
};

export default Heading;
