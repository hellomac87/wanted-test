import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_JOBS_REQUEST } from "../../reducers/jobs";

import styles from "./JobList.module.scss";
import classNames from "classnames/bind";
import Card from "../Card/Card";

const cx = classNames.bind(styles);

const JobList = ({ location }) => {
  const dispatch = useDispatch();
  const parsed = queryString.parse(location.search);
  console.log(parsed);

  const params = {
    tag_type_id: parseInt(parsed.tag_type_id),
    country: parsed.country || "kr",
    job_sort: parsed.job_sort || "job.latest_order",
    years: parseInt(parsed.years) || 0,
    locations: `List[${parsed.locations}]` || `List[all]`
  };

  useEffect(() => {
    dispatch({
      type: LOAD_JOBS_REQUEST,
      params
    });
  }, []);
  const { jobsList } = useSelector(state => state.jobs);

  return (
    <ul className={cx("list")}>
      {jobsList && jobsList.map((job, i) => <Card key={i} job={job} />)}
    </ul>
  );
};

export default withRouter(JobList);
