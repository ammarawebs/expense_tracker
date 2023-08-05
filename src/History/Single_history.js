import React from 'react'

const Single_history = (props) => {
  return (
    <>
        <div className="history_component">
                  <div className="del_btn_div">
                    <button className="del_btn" onClick={()=>{props.onSelect(props.id)}}>
                      X
                    </button>
                  </div>
                  <div className="history_details">
                    <h1 className="transaction_name">
                      {props.transaction_name}
                    </h1>
                    <p className="transaction_amount">
                      {props.transaction_amount}$
                    </p>
                  </div>

                </div>
    </>
  )
}

export default Single_history