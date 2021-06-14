import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BudgetPage from './Components/Budget/BudgetPage'
import HistoryPage from './Components/History/HistoryPage'
import HomePage from './Components/Home/HomePage'


function App() {
  return (
    <>

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/history">History</Link>
              </li>
              <li>
                <Link to="/budget">Budget</Link>
              </li>
            </ul>
          </nav>


          <Switch>
            <Route path="/history">
              <HistoryPage />
            </Route>
            <Route path="/budget">
              <BudgetPage />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;
