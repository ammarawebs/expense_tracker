import React from 'react'
import Transaction_input from './Transaction_input'

const Transactions = (props) => {


  return (
    <>
        <div className="transaction_details">
              <div className="t_d_heading">
                <h1 className="transaction_heading">
                  Transaction Details
                </h1>
                
              </div>
              <div className="t_d_inputs">
              <Transaction_input
                    name='Transaction Name'
                    iname='name'
                    type='text'
                    id='t_name'
                    onChange={props.name_onChange}
                    value={props.name_value}
                />
                <Transaction_input
                    name='Transaction Amount'
                    iname='amount'
                    type='number'
                    id='t_input'
                    onChange={props.amount_onChange}
                    value={props.amount_value}
                />
              </div>
              <div className="Transaction_button_div">
                <button type='button' onClick={props.onClick}  className="transaction_btn">
                    Add Transaction
                </button>
              </div>
            </div>
    </>
  )
}

export default Transactions