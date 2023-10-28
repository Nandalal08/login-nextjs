import Image from 'next/image'
import Link from 'next/link'
import {  FaRegEnvelope } from "react-icons/fa";
import {  MdLockOutline} from "react-icons/md";


export default function Home() {
  return (
    

      <main className="flex min-h-screen flex-col items-center justify-center py-24 text-center">
        <div className=" flex flex-row justify-between rounded-2xl shadow-2xl w-2/3 max-w-4xl">

        <div className="w-3/5 p-5 text-black">
          <div className="text-left text-green font-bold"><span className="text-green-500">verteX</span>zone</div>
        <div className="py-10">
         <h2 className=" text-green-600 font-bold text-3xl mb-2">Sign into Account
        </h2>
          <div className="border-2 border-green-700 w-10 inline-block mb-10"></div>
         <div className="flex flex-col items-center mb-30">
         <div className="bg-gray-200 w-60 p-2 flex items-center">
         <FaRegEnvelope className="text-gray-600 mr-2"/>
         <input type="email" placeholder="Email" className=" bg-gray-200 flex-1 text-sm outline-none"/>

         </div>
          <div className="bg-gray-200 w-60 p-2 mt-6 flex items-center">

         <MdLockOutline className="text-gray-600 mr-2"/>
         <input type="password" placeholder="Password" className=" bg-gray-200 flex-1 text-sm outline-none"/>

         </div>
         <div className="flex w-60 text-xs justify-between m-1">
         <label className="flex item-center mr-2" ><input type="checkbox" className="mr-1"/>remember me</label>
         <a href="#">Forgot password?</a>
         </div>
         <div className="mt-10">
          <a className="border-2 border-green-500 text-green rounded-full px-12 py-2 hover:text-white hover:bg-green-500" href="#">Sign In</a>
        </div>
         </div>

        </div>

        
        
        </div>
         <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-40 px-15">
          
          <h2 className=" text-3xl font-bold mb-2">Hello,world</h2>
          <div className="border-2 border-white w-10 inline-block mb-10"></div>
          <p className="mb-10">
          Fill up the information and login to join us</p>
        <a className="border-2 border-white rounded-full px-12 py-2 hover:text-black hover:bg-white" href="#">Sign Up</a>
        </div>
       
        </div>
      </main>
    
  )
}
