// import './App.css'

import { Route, Routes } from 'react-router-dom'

import AboutUs from './Component/Pages/Aboutus'
// import Footer from './Component/Footer'
// import HomeLayout from './Layout/homelayout'
import HomePage from './Component/Pages/HomePage'




function App() {

  return (
   <>
     <Routes>
       <Route path='/' element= {<HomePage />}></Route>
       <Route path='/about' element= {<AboutUs />}></Route>
     </Routes>


    </>
  )
}

export default App
