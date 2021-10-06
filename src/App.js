import React from "react";
import FavorisContextProvider from "./store/provider/FavorisContextProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Book from "./pages/book/BookPage";
import BooksPage from "./pages/books/BooksPage";
function App() {
  return (
    <FavorisContextProvider>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <BooksPage />
            </Route>
            <Route path="/books/:id">
              <Book />
            </Route>
            <Route>
              <div>404 Page not Found</div>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </FavorisContextProvider>
  );
}

export default App;
