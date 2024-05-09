import './App.css'

import { Route, Routes } from 'react-router-dom'

import AboutUs from "./Component/Pages/AboutUs";
import Contact from './Component/Pages/Contact';
import HomePage from './Component/Pages/HomePage'
import Login from './Component/Pages/Login'
import NotFound from './Component/Pages/NotFound'
import Signup from './Component/Pages/signUp'
import CourseList from './Course/courselist';





function App() {

  return (
   <>
     <Routes>
       <Route path='/' element= {<HomePage />}></Route>
       <Route path='/about' element= {<AboutUs />}></Route>
       <Route path='/signup' element={<Signup />}/>
       <Route path='/courses' element={<CourseList />}/>
       <Route path='/contact' element={<Contact />}/>
       <Route path='/Login' element={<Login />}/>
       <Route path="*" element={<NotFound />}></Route>
     </Routes>
     


    </>
  )
}

export default App
