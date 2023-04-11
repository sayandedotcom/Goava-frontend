import React from 'react';
import Heading from '../headings/headings';
import Button from '../../button';

const Testimonials = () => {
  return (
    <div>
      <Heading id='#testimonials'>Testimonials</Heading>
      <div className='flex justify-between'>
        <a href='http://surl.li/fqflb'>
          <Button buttonType='inverted'>WRITE A REVIEW</Button>
        </a>
        <a href='http://surl.li/fqflp'>
          <Button buttonType='inverted'>READ MORE</Button>
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
