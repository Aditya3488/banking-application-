import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  deposit,
  withdraw,
  collectInterest,
  deleteAccount,
  toggleAccount
} from '../actions'

function Banking() {
  const [amount, setAmount] = useState(0)
  const dispatch = useDispatch()

  const handleChange = e => {
    setAmount(e.target.value)
  }

  const handleDeposit = () => {
    dispatch(deposit(+amount))
  }

  const handleWithdraw = () => {
    dispatch(withdraw(+amount))
  }

  const handleCollectInterest = () => {
    dispatch(collectInterest())
  }

  const handleDeleteAccount = () => {
    dispatch(deleteAccount())
  }
  
    const handleToggleAccount = () => {
      dispatch(toggleAccount())
    }

    return (
      <div>

        <div className='field'>
          <input type='number'
            className='input'
            placeholder='Amount'
            value={amount}
            onChange={handleChange}
          />

        </div>

        <button className='button mr-2 is-success' onClick=
          {handleDeposit}>Deposit</button>
        <button className='button mr-2 is-danger' onClick={handleWithdraw}>withdraw</button>
        <button className='button mr-2 is-link' onClick={handleCollectInterest}>collect interest</button>
        <button className='button mr-2 is-info' onClick={handleDeleteAccount}>Delete Account</button>
        <button className='button mr-2 is-warning' onClick={handleToggleAccount}>Change Account Type</button>
      </div>
    )
  }
  
 export default Banking
