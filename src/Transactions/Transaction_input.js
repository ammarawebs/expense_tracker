import React from 'react'

const Transaction_input = (props) => {
  return (
    <>
        <div className="t_d_name">
                  <h1  className="t_name_heading">{props.name}</h1>
                  <input name={props.iname} autoComplete='off' value={props.value} type={props.type} id={props.id} onChange={props.onChange} className='t_name_input' />
        </div>
    </>
  )
}

export default Transaction_input