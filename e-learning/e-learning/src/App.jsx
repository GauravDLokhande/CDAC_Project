import { Routes, Route } from 'react-router-dom';
import './App.css'
// import Navbar from './components/Navbar';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Profile from './screens/Profile';
import ForgotPassword from './screens/ForgotPassword';
import CourseHero from './screens/CourseHero';
import CourseScreen from './screens/CourseScreen.jsx';

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
        <Route path="/addcontent" element ={<CourseScreen/>} />
        
      </Routes>
    </>
  )
}

export default App
