import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Book from "./pages/book/BookPage";

import BooksPage from "./pages/books/BooksPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <BooksPage />
        </Route>
        <Route path="/books/:id">
          <Book />
        </Route>
        {/* <Route>
          <div>404 Page not Found</div>
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
