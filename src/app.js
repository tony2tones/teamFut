import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <p>React here!</p>
      </div>
    </BrowserRouter>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
