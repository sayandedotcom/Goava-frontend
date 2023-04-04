import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fullProgress} from 'redux/loaderSlice';
import Filters from 'components/courseComponents/filters/filters';
import CourseList from 'components/courseComponents/courses/courseList';
import Input from 'components/courseComponents/input/input';
import Range from 'components/courseComponents/range/range';

const Course = () => {
  useEffect(() => {
    dispatch(fullProgress());
  }, []);

  const dispatch = useDispatch();

  return (
    <>
      <Input />
      <div className='mt-16 flex flex-row bg-[#e7e9ec]'>
        <div className='m-2 flex w-3/12 flex-col items-center gap-4 rounded-xl bg-[#ffffff] p-3'>
          <Filters />
          <Range />
        </div>
        <CourseList />
      </div>
    </>
  );
};

export default Course;
