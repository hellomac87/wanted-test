import React from "react";
import { useSelector } from "react-redux";

import styles from "./JobList.module.scss";
import classNames from "classnames/bind";
import Card from "../Card/Card";

const cx = classNames.bind(styles);

const JobList = () => {
  const { jobsList } = useSelector(state => state.jobs);
  return (
    <ul className={cx("list")}>
      {jobsList && jobsList.map((job, i) => <Card key={i} job={job} />)}
    </ul>
  );
};

export default JobList;
