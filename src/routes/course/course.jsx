import React from "react";
import Filters from "../../components/courseComponents/filters/filters";
import CourseList from "../../components/courseComponents/courses/courseList";

const Course = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Search Courses"
        id="fname"
        name="search"
        className="mx-[50%]"
      />
      <div className="flex flex-row">
        <Filters />
        <CourseList />
      </div>
    </>
  );
};

export default Course;
