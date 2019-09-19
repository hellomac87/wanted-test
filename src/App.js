import React, { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_JOBS_REQUEST } from "./reducers/jobs";

import Button from "./components/Button";
import JobList from "./components/JobList/JobList";

const App = () => {
  return (
    <div className="App">
      <div>
        <Button title={"최신순"} />
        <Button isDefault={false} label={"국가"} title={"한국"} />
        <Button isDefault={true} label={"지역"} title={"전국"} />
        <Button isDefault={false} label={"경력"} title={"신입"} />
      </div>

      <JobList />
    </div>
  );
};

export default App;
