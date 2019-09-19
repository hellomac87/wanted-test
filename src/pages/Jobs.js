import React from "react";
import JobList from "../components/JobList";
import FilterList from "../components/FilterList/FilterList";

const Jobs = () => {
  return (
    <>
      <FilterList />
      <JobList />
    </>
  );
};

export default Jobs;
