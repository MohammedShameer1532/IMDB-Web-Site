import React from 'react';
import './App.css';

const Input = ({onChange}) => {
  return (
    <div className='inpt'>
        <input className='field' 
        type="search" 
         placeholder="enter the move name" 
         onChange={onChange}/>
      
    </div>
  )
}

export default Input;
