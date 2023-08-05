import React from 'react'

const Income_expense = (props) => {
  return (
    <>
        <div className="income_expense">
                <div className="income">
                  <h3 className="income_heading">
                    Income
                  </h3>
                  <p className="income_amount">
                    {props.income}$
                  </p>
                  
                </div>
                <div className="expense">
                  <h3 className="income_heading">
                    Expense
                  </h3>
                  <p className="expense_amount">
                    {props.expense}$
                  </p>
                </div>    
            </div>
    </>
  )
}

export default Income_expense