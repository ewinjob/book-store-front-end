import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../services/apiService';
 
export default function Auth({insideRegister}) {
  console.log(insideRegister);   //value:true -- (props)


  const navigate = useNavigate()

  const [userDetails,setUserDetails] = useState({
    username:"",
    email:"",
    password:""
  })

  console.log(userDetails);

  const handleRegister=async()=>{
    try{

      const res = await registerAPI(userDetails)
      console.log(res);
      navigate('/login')
      
    }catch(err){
        console.log(err);
        
    }
  }

  const handleLogin=async()=>{
    try{

      const res = await loginAPI(userDetails)
      console.log(res);

      if(res.status==200){
        sessionStorage.setItem("userData",JSON.stringify(res.data.existingUser))
        sessionStorage.setItem("userToken",res.data.token)
      }
      
      navigate('/')

    }catch(err){
      console.log(err);
    }
  }
  
  
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[url('https://static.vecteezy.com/system/resources/previews/036/594/463/large_2x/ai-generated-book-store-advertisment-background-with-copy-space-free-photo.jpg')] bg-cover bg-center bg-no-repeat px-4 py-8 font-serif">
      
      <div className="absolute inset-0 bg-black/50" />
 
      <div className="relative z-10 w-full max-w-md rounded-xl bg-white p-6 shadow-2xl sm:p-8">
        <form className="w-full">
  
  {
    insideRegister ? 

    <div>
      <h1 className="mb-2 text-3xl font-bold text-black sm:text-4xl">
        Create account !
      </h1>
     <p className="mb-6 text-gray-600"> explore your next favorite book.</p>
    </div>

     :  

    <div>
      <h1 className="mb-2 text-3xl font-bold text-black sm:text-4xl">Welcome Back</h1>
          <p className="mb-6 text-gray-600">Login to explore your next favorite book.</p>
    </div>
  }
 
          {
            insideRegister && 
            <div>
              <label className="mb-2 block font-medium text-black">UserName</label>
              <input
                type="text"
                onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})}
                placeholder="Enter your usernmae"
                required
                className="mb-4 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black focus:ring-2 focus:ring-gray-200"
              />
            </div>
          }
 
          <label className="mb-2 block font-medium text-black">Email Address</label>
          <input
            type="email"
            onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}
            placeholder="Enter your email"
            required
            className="mb-4 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black focus:ring-2 focus:ring-gray-200"
          />
 
          <label className="mb-2 block font-medium text-black">Password</label>
          <input
            type="password"
            onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}
            placeholder="Enter your password"
            required
            className="mb-4 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black focus:ring-2 focus:ring-gray-200"
          />
 
          {
            insideRegister ?
            <div>
              <button onClick={handleRegister} type="button" className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800"> Register </button>

              <h4 className="mt-6 text-center text-sm text-gray-600">
                You have an account?{' '}
                 <Link to={'/login'}>
                <p className="font-semibold text-black hover:underline">
                  Login
                </p>
                </Link>
              </h4>
            </div>
            :
            <div>
              <div className="mb-4 flex justify-end">
                <a href="/forgot-password" className="text-sm text-gray-700 hover:text-black hover:underline">
                  Forgot password?
                </a>
              </div>
 
              <div className="mb-4 flex items-center gap-3">
                <hr className="flex-1 border-gray-300" />
                <span className="text-sm text-gray-500">OR</span>
                <hr className="flex-1 border-gray-300" />
              </div>
 
              <Link>
                <div type="button" className="mb-4 flex w-full items-center justify-center gap-4 rounded-lg border border-gray-300 bg-white py-3 font-semibold text-black transition hover:bg-gray-100"> <FcGoogle className='text-2xl'/> Sign in with google </div>
              </Link>

             
              <button type="button" onClick={handleLogin} className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800"> Login </button>
             
 
              <h4 className="mt-6 text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to={'/register'}>
                <p className="font-semibold text-black hover:underline">
                  Register
                </p>
                </Link>
              </h4>
            </div>
          }
        </form>
      </div>
    </div>
  )
}
 

