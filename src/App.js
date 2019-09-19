import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jobs from "./pages/Jobs";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Jobs} />
      </Router>
    </div>
  );
};

export default App;
