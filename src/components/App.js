import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      Page 1
      <a href="/pagetwo">Navigate to Page 2</a>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page 2
      <a href="/">Navigate to Page 1</a>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
