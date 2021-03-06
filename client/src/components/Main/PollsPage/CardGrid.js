import React from 'react';
import SingleCard from './SingleCard';

const CardGrid = ({ polls, currentIndex, type }) => {
  if(!polls || polls.length === 0) {
    return null;
  }
  const loadPolls = polls.slice(0, currentIndex || polls.length);
  return (
    <div className="container">
      <div className="row">
        {
          loadPolls.map((poll, index) => (
            <SingleCard poll={poll} key = {index} type={type && "own"}/>
          ))
        }
      </div>
    </div>
  )
}

export default CardGrid; 