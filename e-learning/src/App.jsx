import { Routes, Route } from 'react-router-dom';
import './App.css'
// import Navbar from './components/Navbar';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Profile from './screens/Profile';
import ForgotPassword from './screens/ForgotPassword';
import CourseHero from './screens/CourseHero';
import ContactUs from './screens/ContactUs';
import HelpSupport from './screens/HelpSupport';
import OtpValidation from './screens/OtpValidation';
import ResetPassword from './screens/ResetPassword';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/editProfile" element={<Profile/>} /> 
        <Route path="/forgot" element={<ForgotPassword/>} />
        <Route path="/mylearning" element={<CourseHero/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/HelpSupport" element={<HelpSupport/>} />
        <Route path="/otpvalidation" element={<OtpValidation/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />

        
        
         
      </Routes>
    </>
  )
}

export default App
