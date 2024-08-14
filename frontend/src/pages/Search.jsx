import React, { useState } from 'react'

function Search() {
  const [title,setTitle] = useState('')
  const [books, setBooks] = useState([])
  return (
    <div>
      <div className='bg-slate-200 mt-10'>
        <div className='py-10'><p className='text-[40px]'>SEARCH BOOK</p></div>
        <div className='text-xl text-center grid grid-cols-2 px-[160px] py-[60px] '>
          <label htmlFor="" >BOOK NAME</label>
          <input type="text" placeholder='Enter Here' className='w-[300px]' value={title} onChange={(e)=> setTitle(e.target.value)}/ >
        </div>
        <button className='p-3 px-5 mt-4 bg-blue-400 rounded-lg hover:bg-blue-800'>Submit</button>  

      </div>
        
    </div>
    )
}

export default Search