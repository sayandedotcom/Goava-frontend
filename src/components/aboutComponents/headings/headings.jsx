import React from 'react';
import {Link} from 'react-router-dom';

const Heading = ({children, id}) => {
  return (
    <Link to={id} smooth className='text-4xl font-black'>
      {children}
    </Link>
  );
};

export default Heading;
