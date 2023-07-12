import React from 'react'

const Button = ({onClick}) => {
  return (
    <div className="btn">
       <button className='btn2' onClick={onClick}>click</button>

    </div>
  )
}

export default Button;
