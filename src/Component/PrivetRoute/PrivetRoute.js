import React from 'react';
import { useContext } from 'react';
import { Route,  Navigate  } from 'react-router-dom';
import { loggdInContext } from '../../App';

const PrivetRoute = ({children} ) => {
  const [loggedInUser, setLoggedInUser] = useContext(loggdInContext)
 
  return loggedInUser.email ?children : <Navigate to="/login" replace/>
};

export default PrivetRoute;