import React from "react";

import JobList from "../components/JobList";
import FilterList from "../components/FilterList/FilterList";
import FilterModal from "../components/FilterModal";

const Jobs = () => {
  return (
    <>
      <FilterList />
      <JobList />
      <FilterModal />
    </>
  );
};

export default Jobs;
