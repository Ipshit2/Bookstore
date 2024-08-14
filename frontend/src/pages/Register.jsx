import React, { useState } from 'react'

import axios from 'axios'

function Register() {
    
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [year,setYear] = useState('')
    const handleSaveBook = () =>{
        const data ={
        title,
        author,
        year,
        };
        axios
        .post('http://localhost:8000/book/register', data)
        .then(() => {
            alert('Successfully Entered book');
            
        })
        .catch((error)=>{
            alert('An error happened. Please check console');
            console.log(error);

        });
    };

  return (
    <div className='flex justify-center'>
        <div className='bg-slate-200 pb-[120px] mt-10 w-[1000px] justify-self-center '>
            <div className='py-10'><p className='text-[40px]'>ENTER A BOOK</p></div>
            <div className='text-xl text-center grid grid-cols-2 px-[160px] py-[60px] gap-4'>
                <label htmlFor="" >BOOK NAME</label>
                <input type="text" placeholder='Enter Here' value={title} onChange={(e)=> setTitle(e.target.value) }/>
                <label htmlFor="" >AUTHOR'S NAME</label>
                <input type="text" placeholder='Enter Here' value={author} onChange={(e)=> setAuthor(e.target.value) }/>
                <label htmlFor="" >YEAR OF PUBLICAITON</label>
                <input type="number" placeholder='Enter Here' value={year} onChange={(e)=> setYear(e.target.value) } />
            </div>
            <button className='p-3 px-5 mt-10 bg-blue-400 rounded-lg hover:bg-blue-800' onClick={handleSaveBook}>SUBMIT</button>
        </div>
    </div>
  )
}

export default Register