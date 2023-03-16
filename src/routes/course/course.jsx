import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Filters from "../../components/courseComponents/filters/filters";
import CourseList from "../../components/courseComponents/courses/courseList";
import { fullProgress } from "../../redux/loaderSlice";
import Input from "../../components/courseComponents/input/input";

const Course = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fullProgress());
  }, []);

  return (
    <>
      <Input />
      <div className="flex flex-row">
        <Filters />
        <CourseList />
      </div>
    </>
  );
};

export default Course;
