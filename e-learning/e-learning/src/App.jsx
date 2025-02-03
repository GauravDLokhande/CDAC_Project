import { Routes, Route } from 'react-router-dom';
import './App.css'
// import Navbar from './components/Navbar';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Profile from './screens/Profile';
import ForgotPassword from './screens/ForgotPassword';
import CourseScreen from './screens/CourseScreen.jsx';
import MyLearning from './screens/MyLearning.jsx';
import CourseIntroScreen from './screens/CourseIntroScreen.jsx';
import CourseScreenByNeeraj from './screens/CourseScreenByNeeraj.jsx';
import MyCourse from './screens/mycourse.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/editProfile" element={<Profile/>} /> 
        <Route path="/forgot" element={<ForgotPassword/>} />
        <Route path="/mycourse" element={<MyCourse/>} />
        <Route path="/addcontent" element ={<CourseScreen/>} />
        <Route path='/mylearning' element={<MyLearning/>}/>
        <Route path='/course' element={<CourseIntroScreen/>}/>
        <Route path='/coursebn' element={<CourseScreenByNeeraj/>}/>
        
      </Routes>
    </>
  )
}

export default App
