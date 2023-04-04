import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FormInput from '../../input/input';
import NewTooltip from '../../tooltip/tooltip';
import Button from '../../button/button';
const Input = () => {
  return (
    <form
      action=''
      className='flex justify-center items-center gap-3 p-4 fixed top-[100px] left-0 right-0 bg-[#ffffff] z-50'>
      <FormInput
        className='w-96 py-2 rounded-xl'
        type='text'
        placeholder='Search Courses'
        name='search'
      />
      <NewTooltip title='Search'>
        <Button buttonType='inverted' className='rounded-[50%] h-11 w-11'>
          <SearchRoundedIcon />
        </Button>
      </NewTooltip>
    </form>
  );
};

export default Input;
