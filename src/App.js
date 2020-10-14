import React, { createContext } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import PrivetRoute from './Components/PrivateRoute/PrivateRoute';
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
  const [loggedInUser, serviceInfo, setServiceInfo, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, serviceInfo, setServiceInfo, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivetRoute path="/orders">
              <Orders />
          </PrivetRoute>
          <PrivetRoute path="/serviceList">
            <ServiceList />
          </PrivetRoute>
          <PrivetRoute path="/review">
            <Review />
          </PrivetRoute>
          <PrivetRoute path="/projectList">
            <AllProjectList />
          </PrivetRoute>
          <PrivetRoute path="/addService">
            <AddService />
          </PrivetRoute>
          <PrivetRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivetRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
