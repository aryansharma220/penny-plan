"use client";
import React, { useState } from 'react'
import { Switch } from './ui/switch'

const AccountCard = ({ account }) => {

  const [isChecked, setIsChecked] = useState(account.isDefault)

  return (
    <div>
      <div className="visa-card">
        <div className="logoContainer">
          <Switch checked={isChecked} onClick={() => setIsChecked(!isChecked)} />
        </div>
        <div className="number-container">
          <h2 className="input-label" >
            Balance
          </h2>
          <p className='text-white font-bold'>₹&nbsp;{Number(parseFloat(account.balance).toFixed(2)).toLocaleString('en-IN')}</p>
        </div>

        <div className="name-date-cvv-container">
          <div className="name-wrapper">
            <h2 className="input-label" >
              Account Name
            </h2>
            <p className='text-white'>{account.name}</p>
          </div>

          <div className="expiry-wrapper">
            <h2 className="input-label " >
              Type
            </h2>
            <p className='text-white'>{account.type.charAt(0) + account.type.slice(1).toLowerCase()}</p>
          </div>
        </div>

      </div >

    </div >
  )
}

export default AccountCard