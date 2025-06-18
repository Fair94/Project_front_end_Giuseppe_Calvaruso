/* eslint-disable no-unused-vars */


import './App.css'
import sale from './assets/main.png'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userIn } from './redux/action';


function App() {

   const dispatch = useDispatch();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      dispatch(userIn(user.username)); 
    }
  }, []);
 

  return (
    
    <div className=' w-full  min-h-screen bg-[#d5d0c6]  '>
      <div className=' items-center flex flex-col justify-center pt-20 '>
       <div className='bg-[#f7f1ec] rounded-4xl p-4 shadow-2xl'>
     <p className=' text-8xl text-left   '>Black Friday: Our </p> 
     <p className='text-8xl text-left '>Best Sale of the Year</p>
     </div>
     <div className='bg-[#f7f1ec] rounded-4xl p-4 shadow-2xl mt-4'>
     <p className=' text-left  pt-4 font-medium '>Don't miss out! Get $350 off our comprehensive blood test when you start your</p>
      <p className=' text-left  pt-4 font-medium '> membership today. Grab this amazing offer now!</p>
      </div>
     
     <div className='lg:grid grid-cols-2 m-10'>
        <div>
        <img src={sale} alt="My awesome great sale" width={400} />
        </div>


        <div className='bg-[#f7f1ec] rounded-4xl p-4 shadow-2xl mt-4'>
            <p className='text-6xl pt-4 text-center'>Great deals!!!!</p>
            <p className='text-4xl  text-center '>Visit our store to find the best deal <br/> for you</p>
        </div>
  


     </div>
     

     </div>

    </div>
  )
}

export default App
