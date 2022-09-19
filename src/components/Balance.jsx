import React from 'react'
import {useSelector} from 'react-redux'

function Balance() {
  const state = useSelector(({auth,banking}) => {
    return {
      balance : banking.balance,
      interest : banking.interest
    }
  })
  return (
    <div>
        <h1 className='is-size-2'>Balance : <strong>{state.balance} INR</strong></h1>
      <h1 className='is-size-2'>Interest : <strong>{state.interest} INR</strong></h1> 
    </div>
  )
}
export default Balance