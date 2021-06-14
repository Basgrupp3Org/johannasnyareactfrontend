import './App.css';
import React, { useState } from "react";
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


  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>


      <Router>
        <div>

          <div className='navbar'>

            <button onClick={showSidebar} >Menu</button>

          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='/home' className='menu-bars'>Home</Link>
                <Link to='/budget' className='menu-bars'>Budget</Link>
                <Link to='/history' className='menu-bars'>History</Link>
                <button onClick={showSidebar}>Close</button>
              </li>


            </ul>
          </nav>



          {/* <nav>
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
          </nav> */}


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
