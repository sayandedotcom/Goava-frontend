import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fullProgress } from "../../redux/loaderSlice";
import Filters from "../../components/courseComponents/filters/filters";
import CourseList from "../../components/courseComponents/courses/courseList";
import Input from "../../components/courseComponents/input/input";
import Range from "../../components/courseComponents/range/range";

const Course = () => {
  useEffect(() => {
    dispatch(fullProgress());
  }, []);

  const dispatch = useDispatch();

  return (
    <>
      <Input />
      <div className="flex flex-row bg-[#e7e9ec] mt-16">
        <div className="flex flex-col items-center m-2 w-3/12 p-3 gap-4 bg-[#ffffff] rounded-xl">
          <Filters />
          <Range />
        </div>
        <CourseList />
      </div>
    </>
  );
};

export default Course;
