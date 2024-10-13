import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'


const Card = (props) => {
  let review = props.review;
  return (
    <div>
       <div className='w-[400px] [h-300px]'>
        <img src={review.image} />
      </div>
      <div>
        <p > {review.name}</p>
      </div>
      <div>
        <p>   {review.job}</p>
      </div>
      <div>
        <FaQuoteLeft ></FaQuoteLeft>
      </div>
      
        <p>{review.text}</p>
      <div/>
      <div>
      <FaQuoteRight></FaQuoteRight>
      </div>
      
    </div>
  )
}

export default Card
