import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_FILTERS_REQUEST } from "../../reducers/filters";
import { withRouter } from "react-router";

const Landing = () => {
  const dispatch = useDispatch();
  const { onJobListReady } = useSelector(state => state.jobs);
  useEffect(() => {
    dispatch({
      type: LOAD_FILTERS_REQUEST
    });
  }, []);

  if (!onJobListReady) {
    return <div />;
  } else {
    return (
      <Redirect
        to={
          "/jobs?tag_type_id=669&job_sort=job.latest_order&country=all&years=-1"
        }
      />
    );
  }
};

export default withRouter(Landing);
