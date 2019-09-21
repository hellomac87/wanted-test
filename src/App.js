import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jobs from "./pages/Jobs";
import Landing from "./components/Landing/";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Landing} />
        <Route path="/jobs" component={Jobs} />
      </Router>
    </div>
  );
};

export default App;
