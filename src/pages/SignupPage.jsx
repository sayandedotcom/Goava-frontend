import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Button from 'components/button';
import Google from 'assests/svg-google.svg';
import FormInput from 'components/formInput';
import NewTooltip from 'lib/tooltip';
import {toastify} from 'lib/toast';
import {schema} from 'lib/yup';

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({name, email, password}) => {
    let result = await fetch('http://localhost:4000/api/v1/signup', {
      method: 'POST',
      body: JSON.stringify({name, email, password}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result = await result.json();
    if (result.success) {
      toastify('Log In with your info...', 'success');
      navigate('/login');
      reset();
    } else {
      toastify('User already exists ! Try to Log In', 'error');
    }
  };

  return (
    <div className='mb-24 flex h-auto flex-col items-center justify-center gap-4'>
      <p className='text-4xl font-black uppercase'>Sign up</p>
      <div className='mt-3 flex flex-row items-center gap-4'>
        <p className='text-xl  font-bold'>Already have an Account ?</p>
        <Link to={'/login'}>
          <Button buttonType='inverted'>Log In</Button>
        </Link>
      </div>
      <div className='mt-5 flex w-80 flex-col gap-3 text-center font-semibold'>
        <p>Sign up with your Email and Password</p>
        <hr className='border border-black' />
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
          <FormInput
            placeholder='Full Name'
            type='text'
            name='name'
            register={{...register('name')}}
            errorMessage={errors.name?.message}
          />
          <FormInput
            placeholder='Email Address'
            type='text'
            name='email'
            register={{...register('email')}}
            errorMessage={errors.email?.message}
          />
          <FormInput
            placeholder='Password'
            type='password'
            name='password'
            register={{...register('password')}}
            errorMessage={errors.password?.message}
          />
          <FormInput
            placeholder='Confirm Password'
            type='password'
            name='confirmPassword'
            register={{...register('confirmPassword')}}
            errorMessage={errors.confirmPassword?.message}
          />
          <Button buttonType='inverted' type='submit'>
            Sign Up
          </Button>
        </form>
      </div>
      <h1 className='text-2xl font-bold'>OR</h1>
      <div className='flex items-center justify-center gap-4'>
        <NewTooltip title='Sign Up with Google'>
          <Button buttonType='google'>
            <img src={Google} alt='' />
            Google
          </Button>
        </NewTooltip>
      </div>
    </div>
  );
};

export default Signup;
