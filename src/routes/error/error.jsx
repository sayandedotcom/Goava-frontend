import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import Button from 'components/button/button';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className='flex h-[70vh] flex-col items-center justify-center gap-8 p-5'>
      <span className='text-6xl font-black'> ERROR 404 ! </span>{' '}
      <span className='text-xl font-bold'>
        Page Not Found Unfortunately, The Page You Are Looking For Does Not
        Exist. Please Navigate To Home. Thank You
      </span>
      <div className='flex flex-row gap-2 '>
        <Link to={'/'}>
          <Button buttonType='inverted'>
            <HomeRoundedIcon />
            Back to Home
          </Button>
        </Link>
        <Link onClick={() => navigate(-1)}>
          <Button buttonType='inverted'>
            <ChevronLeftRoundedIcon />
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
