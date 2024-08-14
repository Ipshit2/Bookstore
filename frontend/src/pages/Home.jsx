import React from 'react'
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div>
        <div className='h-[500px] mt-12 content-around'>
            <div className='flex space-x-20 justify-center' >
            <NavLink to="/register" className="hover:text-blue-700 " >
                    <div className=" h-[200px] w-[400px] rounded   shadow-lg  font-bold text-[30px]  bg-slate-200 py-[75px] ">
                    ENTER A BOOK
                    </div>
                </NavLink>
                <NavLink to="/all" className="hover:text-blue-700 " >
                    <div className=" h-[200px] w-[400px] rounded   shadow-lg  font-bold text-[30px]  bg-slate-200 py-[75px] ">
                    VIEW ALL BOOKS
                    </div>
                </NavLink>
            </div>
            <div className='flex space-x-20  mt-12 justify-center'>
                <NavLink to="/search" className="hover:text-blue-700 " >
                    <div className=" h-[200px] w-[400px] rounded   shadow-lg  font-bold text-[30px]  bg-slate-200 py-[75px] ">
                    SEARCH A BOOK
                    </div>
                </NavLink>
                
                <NavLink to="/delete" className="hover:text-blue-700 " >
                    <div className=" h-[200px] w-[400px] rounded   shadow-lg  font-bold text-[30px]  bg-slate-200 py-[75px] ">
                    DELETE A BOOK
                    </div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Home