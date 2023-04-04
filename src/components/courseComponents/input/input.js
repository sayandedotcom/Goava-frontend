import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FormInput from '../../input/input';
import NewTooltip from '../../tooltip/tooltip';
import Button from '../../button/button';
const Input = () => {
  return (
    <form
      action=''
      className='fixed top-[100px] left-0 right-0 z-50 flex items-center justify-center gap-3 bg-[#ffffff] p-4'>
      <FormInput
        className='w-96 rounded-xl py-2'
        type='text'
        placeholder='Search Courses'
        name='search'
      />
      <NewTooltip title='Search'>
        <Button buttonType='inverted' className='h-11 w-11 rounded-[50%]'>
          <SearchRoundedIcon />
        </Button>
      </NewTooltip>
    </form>
  );
};

export default Input;
