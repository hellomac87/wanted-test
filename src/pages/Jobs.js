import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_FILTERS_REQUEST } from "../reducers/filters";
import JobList from "../components/JobList";
import FilterList from "../components/FilterList/FilterList";
import FilterModal from "../components/FilterModal";

const Jobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_FILTERS_REQUEST
    });
  }, []);
  return (
    <>
      <FilterList />
      <JobList />
      <FilterModal />
    </>
  );
};

export default Jobs;
