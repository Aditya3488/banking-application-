import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {toggleLogIn} from '../actions'

function LogIn() {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn)
  const dispatch = useDispatch()
  const handleLogIn = ()=>{
    dispatch(toggleLogIn())
  }
  return (
    <>
      <h1 className='is-size-3'>
        {isLoggedIn ? 'You are Logged in' : 'You are Logged out'}
      </h1>
      <button className='button is-success' onClick={handleLogIn}>LogIn</button>
    </>
  )
}
export default LogIn