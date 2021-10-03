import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BooksPage from "./pages/books/BooksPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <BooksPage />
        </Route>
        <Route path="/books/:id">
          <p>Hello</p>
        </Route>
        {/* <Route>
          <div>404 Page not Found</div>
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
