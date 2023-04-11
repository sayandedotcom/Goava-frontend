import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {fullProgress} from 'store/loaderSlice';
import Button from 'components/button';
import Number from 'components/aboutComponents/numbers/numbers';
import Socials from 'components/aboutComponents/socials/socials';
import Testimonials from 'components/aboutComponents/testimonials/testimonials';
import Team from 'components/aboutComponents/team/team';
import Location from 'components/aboutComponents/location/location';

const About = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fullProgress());
  }, [dispatch]);

  return (
    <div className='my-3 flex flex-col items-center justify-center gap-6'>
      <Team />
      <Number />
      <Testimonials />
      <Location />
      <Socials />
      <Link to={'/courses'}>
        <Button className='rounded-none' buttonType='inverted'>
          Check Courses !
        </Button>
      </Link>
    </div>
  );
};

export default About;
