import React, { createContext } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import { useState } from 'react';
import AddService from './Components/Dashboard/AddService/AddService';
import Orders from './Components/Dashboard/Orders/Orders';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import Review from './Components/Dashboard/Review/Review';
import AllProjectList from './Components/Dashboard/AllProjectList/AllProjectList';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/orders">
              <Orders />
          </PrivateRoute>
          <PrivateRoute path="/serviceList">
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/projectList">
            <AllProjectList />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
