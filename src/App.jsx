import { useState } from 'react'
import Testimonial from './components/Testimonial'
import reviews from './components/Data'



function App() {


  return (
    <div className='flex flex-col justify-center items-center h-[100vh] w-[100vw] bg-red-100 py-15'>
    <div >
      <h1 className=' text-[50px] py-15 text-center '>Our testimonials</h1>
     <Testimonial reviews={reviews}></Testimonial>
    </div>
   
   </div>

  )
}

export default App
