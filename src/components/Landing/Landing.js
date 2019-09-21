import React, { useEffect } from "react";
import { withRouter } from "react-router";

const Landing = ({ history }) => {
  useEffect(() => {
    const { push } = history;
    push(
      `/jobs?tag_type_id=669&country=all&job_sort=job.latest_order&years=0&locations=seoul`
    );
  }, []);
  return <div />;
};

export default withRouter(Landing);
