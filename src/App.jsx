import './App.css'

import { Route, Routes } from 'react-router-dom'

import RequireAuth from './Component/Auth/RequireAuth';
import AboutUs from "./Component/Pages/AboutUs";
import Contact from './Component/Pages/Contact';
import AddLecture from './Component/Pages/Dashboard/Addlecture';
import AdminDashboard from './Component/Pages/Dashboard/AdminDashboard';
import DisplayLecture from './Component/Pages/Dashboard/Displaylecture';
import Denied from './Component/Pages/Denied';
import HomePage from './Component/Pages/HomePage'
import Login from './Component/Pages/Login'
import NotFound from './Component/Pages/NotFound'
import Checkout from './Component/Pages/Payment/Checkout';
import CheckoutFailer from './Component/Pages/Payment/CheckoutFailer';
import CheckoutSuccess from './Component/Pages/Payment/CheckoutSuccess';
import Signup from './Component/Pages/signUp'
import EditProfile from './Component/Pages/User/EditProfile';
import Profile from './Component/Pages/User/Profile';
import CourseDescription from './Course/CourseDescription';
import CourseList from './Course/courselist';
import CreateCourse from './Course/CreateCourse';





function App() {

  return (
   <>
     <Routes>
       <Route path='/' element= {<HomePage />}></Route>
       <Route path='/about' element= {<AboutUs />}></Route>
       <Route path='/signup' element={<Signup />}/>
       <Route path='/courses' element={<CourseList />}/>
       <Route path='/contact' element={<Contact />}/>
       <Route path='/denied' element={<Denied />}/>
       <Route path='/course/description' element={<CourseDescription />}/>
       <Route path='/Login' element={<Login />}/>

       <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>}>
       <Route path='/course/create' element={<CreateCourse />}/> 
       <Route path='/course/addlecture' element={<AddLecture />}/> 
       <Route path='/admin/dashboard' element={<AdminDashboard />}/> 
       </Route>

       <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
       <Route path='/user/profile' element={<Profile />}/>
       <Route path='/user/editprofile' element={<EditProfile />}/>
       <Route path='/checkout' element={<Checkout />}/>
       <Route path='/checkout/success' element={<CheckoutSuccess />}/>
       <Route path='/checkout/failer' element={<CheckoutFailer />}/>
       <Route path='/checkout/displaylectures' element={<DisplayLecture />}/>
       </Route>

       <Route path="*" element={<NotFound />}></Route>
     </Routes>
     


    </>
  )
}

export default App
