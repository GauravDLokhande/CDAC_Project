import { Routes, Route } from 'react-router-dom';
import './App.css'
// import Navbar from './components/Navbar';
import Home from './screens/globals/Home.jsx';
import Login from './screens/globals/Login.jsx';
import Register from './screens/globals/Register.jsx';
import Profile from './screens/globals/Profile.jsx';
import ForgotPassword from './screens/globals/ForgotPassword.jsx';
import CourseIntroScreen from './screens/student/CourseIntroScreen.jsx';
import MyCourseStudent from './screens/student/MyCourse.jsx';
import MyCourseInstructor from './screens/instructor/MyCourses.jsx';
import AddModule from './screens/instructor/AddModule.jsx';
import UpdateModule from './screens/instructor/UpdateModule.jsx';
import MyLearning from './screens/student/MyLearning';
import AdminDashboard from './screens/admin/AdminDashboard.jsx';
import StudentManagement from './screens/admin/StudentManagement';
import InstructorManagement from './screens/admin/InstructorManagement';
import RegisteredUsersGraphScreen from './screens/admin/RegisteredUsersGraphScreen';
import EnrolledUsersGraphScreen from './screens/admin/EnrolledUsersGraphScreen';
import CourseManagement from './screens/admin/CourseMangement';
import AddCourseScreen from './screens/admin/AddCourseScreen';
import AddInstructorScreen from './screens/admin/AddInstructorScreen';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/editProfile" element={<Profile/>} /> 
        <Route path="/forgot" element={<ForgotPassword/>} />
        <Route path="/mycourse" element={<MyCourseStudent/>} />
        <Route path='/mylearning' element={<MyLearning/>}/>
        <Route path='/course' element={<CourseIntroScreen/>}/>
        <Route path='/instructor/courses' element={<MyCourseInstructor/>}/>
        <Route path='/instructor/courses/:courseId/addmodules' element={<AddModule/>}/>
        <Route path='/instructor/courses/:courseId/updatemodule' element={<UpdateModule/>}/>
        <Route path='/dashboard' element={<AdminDashboard/>}/>
        <Route path='/manage-students' element={<StudentManagement/>}/>
        <Route path='/manage-instructors' element={<InstructorManagement/>}/>
        <Route path='/charts/line' element={<RegisteredUsersGraphScreen/>}/>
        <Route path='/charts/bar' element={<EnrolledUsersGraphScreen/>}/>
        <Route path='/manage-courses' element={<CourseManagement/>}/>
        <Route path='/admin/create-course' element={<AddCourseScreen/>}/>
        <Route path='/admin/create-instructor' element={<AddInstructorScreen/>}/>



        
      </Routes>
    </>
  )
}

export default App
