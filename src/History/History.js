import React from 'react'
import Single_history from './Single_history'

const History = (props) => {
  return (
    <>
        <div className="history">
              <div className="history_heading_div">
                <h1 className="history_heading">
                  History
                </h1>
              </div>
              <div className="history_section">
              {
                props.transaction_array.map((curElem, index)=>{
                  return(
                    <Single_history
                       key={index}
                       id={index}
                       transaction_name={curElem.name}
                       transaction_amount={curElem.amount}
                       onSelect={props.onDeleteBtn}
                    />
                  )

                })
              }
                
                
                
              </div>
            </div>
    </>
  )
}

export default History