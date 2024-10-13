import  { useState } from 'react'
import Card from './Card'
import React from 'react';



const Testimonial = (props) => {
  let reviews = props.reviews;
  const [index,setIndex] = useState(1)

  function LeftIndexHandler (){
    if(index - 1 < 0){
      setIndex(reviews.length - 1)
    }
    else{
      setIndex(index -1)
    }
  }
   
 

 const RightIndexHandler =()=>{
 if(index + 1 >= reviews.length) {
  setIndex(0);
}
else{
 setIndex(index+1)  
    }
}
  const SurpriseHandler = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  };
 



  return (
    <div>
     <Card review ={reviews[index]}></Card>
     
      <div>
          <button className='bg-yellow-400'  onClick={RightIndexHandler}  >
         + increaser
       </button>
      </div>
      
      <button className='bg-green-600' onClick={LeftIndexHandler}  >  - decreaser </button>


      <div >
        <button onClick={SurpriseHandler} className='bg-blue-400'>surprise me </button>
      </div>
      
    </div>
  )
}

export default Testimonial
  