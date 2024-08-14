
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Books from './pages/Books.jsx'
import Search from './pages/Search.jsx'
import Delete from './pages/Delete.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
    <Route path='/' element={<Home />}></Route>
    <Route path='/register' element={<Register />}></Route>
    <Route path='/all' element={<Books />}></Route>
    <Route path='/search' element={<Search />}></Route>
    <Route path='/delete' element={<Delete />}></Route>


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
