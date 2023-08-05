import React from 'react'

const Balance = (props) => {
  return (
    <>
          <div className="balance">
            <h3 className='balance_heading'>balance</h3>
            <p className='balance_amount'>{props.balance}$</p>
          </div>
    </>
  )
}

export default Balance