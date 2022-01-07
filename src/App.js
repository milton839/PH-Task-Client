
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import DashboardNav from './Components/Dashboard/Dashboard/DashboardNav';
import Accounts from './Components/Dashboard/DashboardPage/Accounts';
import BillsPage from './Components/Dashboard/DashboardPage/BillsPage';
import Contacts from './Components/Dashboard/DashboardPage/Contacts';
import Deals from './Components/Dashboard/DashboardPage/Deals';
import EditProfile from './Components/Dashboard/EditProfile/EditProfile';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
        
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
          <BillsPage></BillsPage>
          </Route>
          <Route path="/home">
            <BillsPage></BillsPage>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard">
            <DashboardNav></DashboardNav>
          </Route>
          <Route path="/billsPage">
            <BillsPage></BillsPage>
          </Route>
          <Route path="/contacts">
            <Contacts></Contacts>
          </Route>
          <Route path="/deals">
            <Deals></Deals>
          </Route>
          <Route path="/accounts">
            <Accounts></Accounts>
          </Route>
          <Route path="/edit-profile">
            <EditProfile></EditProfile>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
