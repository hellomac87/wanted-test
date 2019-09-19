import React, { useCallback, useState, useEffect } from "react";

import JobList from "./components/JobList";
import FilterList from "./components/FilterList/FilterList";

const App = () => {
  return (
    <div className="App">
      <FilterList />

      <JobList />
    </div>
  );
};

export default App;
