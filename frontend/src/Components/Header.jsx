import React from 'react'
import { NavLink} from 'react-router-dom'
function Header() {
  return(
    <header className="">
        <ul className='flex justify-center'>
          <li>
            <NavLink to="/" className={({isActive}) =>` ${isActive ? "text-blue-700" : "text-black"} px-10 text-[20px] hover:text-blue-700`}>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/register"  className={({isActive}) =>` ${isActive ? "text-blue-700" : "text-black"} px-10 text-[20px] hover:text-blue-700`}>Add Book</NavLink>
          </li>
          <li>
            <NavLink to="/all"  className={({isActive}) =>` ${isActive ? "text-blue-700" : "text-black"} px-10 text-[20px] hover:text-blue-700`}>All books</NavLink>
          </li>
          <li>
            <NavLink to="/search"  className={({isActive}) =>` ${isActive ? "text-blue-700" : "text-black"} px-10 text-[20px] hover:text-blue-700`}>Search</NavLink>
          </li>
          <li>
            <NavLink to="/delete"  className={({isActive}) =>` ${isActive ? "text-blue-700" : "text-black"} px-10 text-[20px] hover:text-blue-700`}>Delete Book</NavLink>
          </li>
        </ul>
    </header>

  );
}

export default Header