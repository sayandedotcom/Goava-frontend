import React from 'react';
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';

const FormInput = ({
  children,
  register,
  errorMessage,
  className,
  ...otherProps
}) => {
  return (
    <div>
      <input
        className={`w-80 border-2 border-black py-1	pl-3 font-semibold ${className}`}
        {...register}
        {...otherProps}>
        {children}
      </input>
      {errorMessage && (
        <p className='mt-1 flex items-center justify-center gap-1 text-red-600'>
          <ReportGmailerrorredRoundedIcon />
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default FormInput;
