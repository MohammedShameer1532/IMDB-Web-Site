import React from 'react';
import './App.css';

const Get = ({getData}) => {
  console.log(getData);
  return (
    <div className='get'>
      {getData.map((movie,index)=>{
      
        return(
        <div className='cover' key={index}> 
        <div >Name:{movie.Title}</div>
        <div>type:{movie.Type}</div>
        <div>year:{movie.Year}</div>
        <div>imdbID:{movie.imdbID}</div>
        <img src={movie.Poster} alt=''/>


        </div>
        );

      })}
    </div>
  );
};

export default Get;
