import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import BudgetPage from './Components/Budget/BudgetPage'
import HistoryPage from './Components/History/HistoryPage'
import HomePage from './Components/Home/HomePage'
import Hamburger from 'hamburger-react'



function App() {


  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
        <Router>
        <div>

          <div className='navbar'>

           <Hamburger color="#ffffff" toggled={sidebar} toggle={setSidebar} onToggle={toggled => {
          if (toggled) {
            showSidebar()
           } else {
              showSidebar()
               }
                }} />

                <label>Johannas Bank App - Basgrupp 3</label>

          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <NavLink  to='/home' activeStyle={{
              fontWeight: "bold",
               color: "red" }}>Home</NavLink>
                <NavLink to='/budget' activeStyle={{
              fontWeight: "bold",
              color: "red"
              }}>Budget</NavLink>
                <NavLink to='/history'activeStyle={{
                fontWeight: "bold",
                color: "red"
                }}>History</NavLink>
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
