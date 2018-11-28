import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
