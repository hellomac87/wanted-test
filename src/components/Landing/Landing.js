import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_FILTERS_REQUEST } from "../../reducers/filters";
import { withRouter } from "react-router";

const Landing = ({ history }) => {
  const dispatch = useDispatch();
  const { push } = history;
  const { onJobListReady } = useSelector(state => state.jobs);
  useEffect(() => {
    dispatch({
      type: LOAD_FILTERS_REQUEST
    });
  }, []);

  if (!onJobListReady) {
    return <div />;
  } else {
    return <Redirect to={"/jobs"} />;
  }
};

export default withRouter(Landing);
