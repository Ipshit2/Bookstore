import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
function Books() {
  const [books, setBooks] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/book").then((res)=>{
      setBooks(res.data.data)
    })
    .catch((error)=>{
      console.log(error);
      
    })
  })
  return (
    <div>
        <div>
          <div className='py-10'><p className='text-[40px]'>All Books</p></div>
          <div className='grid grid-cols-4 gap-10 '>
            {books.map((book)=>(
              <div className='bg-slate-200 p-5 rounded-md text-left'>
                <p className='mb-2 text-[30px] font-medium leading-tight '>{book.title}</p>
                <p>{book.author}</p>
                <p>{book.year}</p>
                <button className='p-3 px-5 mt-10 bg-blue-400 rounded-lg hover:bg-blue-600'><Link>Delete</Link></button>
                
              </div>
            )

            )}
          </div>
        </div>
    </div>
  )
}

export default Books