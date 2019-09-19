import React, { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_JOBS_REQUEST } from "../../reducers/jobs";

import styles from "./JobList.module.scss";
import classNames from "classnames/bind";
import Card from "../Card/Card";

const cx = classNames.bind(styles);

const JobList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_JOBS_REQUEST
    });
  }, []);
  const { jobsList } = useSelector(state => state.jobs);
  console.log(jobsList);

  return (
    <ul className={cx("list")}>
      {jobsList && jobsList.map((job, i) => <Card key={i} job={job} />)}
    </ul>
  );
};

export default JobList;
