import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const PrivatePage = ({children}) => {
  const [user] = useAuthState(auth);
  console.log(user)

    if(!user){
        return <Navigate to="/signin"/>
    }
  return children
}

export default PrivatePage
