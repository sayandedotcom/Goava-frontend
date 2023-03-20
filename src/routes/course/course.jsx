import React, { useEffect, useState } from "react";
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

  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Input />
      <div className="flex flex-row bg-[#e7e9ec] mt-16">
        <div className="flex flex-col items-center h-auto m-2 w-3/12 p-3 gap-4 bg-[#ffffff] rounded-xl">
          <Filters />
          <h1>{value}</h1>
          <Range
            value={value}
            handleChange={handleChange}
            min={0}
            max={100}
            step={10}
          />
        </div>
        <CourseList />
      </div>
    </>
  );
};

export default Course;
