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

  const params = {
    tag_type_id: parseInt(parsed.tag_type_id),
    country: parsed.country,
    job_sort: parsed.job_sort,
    years: parseInt(parsed.years),
    locations: `List[${parsed.locations}]`
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
