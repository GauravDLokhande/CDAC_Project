import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
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
import CourseManagement from './screens/admin/CourseMangement.jsx';
import AddCourseScreen from './screens/admin/AddCourseScreen';
import AddInstructorScreen from './screens/admin/AddInstructorScreen';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateInstructorScreen from './screens/admin/UpdateInstructorScreen.jsx';
import UpdateStudentScreen from './screens/admin/UpdateStudentScreen.jsx';
import ResetPassword from './screens/globals/ResetPassword.jsx';
import OtpValidation from './screens/globals/OtpValidation.jsx';
import ContactUs from './screens/globals/ContactUs.jsx';
import HelpSupport from './screens/globals/HelpSupport.jsx';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/editProfile" element={<Profile />} /> 
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/mycourse/:courseId" element={<MyCourseStudent />} />
        <Route path='/mylearning' element={<MyLearning />} />
        <Route path='/course/:courseId' element={<CourseIntroScreen />} />
        <Route path='/instructor/courses' element={<MyCourseInstructor />} />
        <Route path='/instructor/courses/:courseId/addmodules' element={<AddModule />} />
        <Route path='/instructor/courses/:courseId/updatemodule' element={<UpdateModule />} />
        <Route path='/dashboard' element={<AdminDashboard />} />
        <Route path='/manage-students' element={<StudentManagement />} />
        <Route path='/manage-instructors' element={<InstructorManagement />} />
        <Route path='/charts/line' element={<RegisteredUsersGraphScreen />} />
        <Route path='/charts/bar' element={<EnrolledUsersGraphScreen />} />
        <Route path='/manage-courses' element={<CourseManagement />} />
        <Route path='/admin/create-course' element={<AddCourseScreen />} />
        <Route path='/admin/create-instructor' element={<AddInstructorScreen />} />
        <Route path='/admin/update-instructor/:instructorId' element={<UpdateInstructorScreen />} />
        <Route path='/admin/update-student/:studentId' element={<UpdateStudentScreen />} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
        <Route path="/otpvalidation" element={<OtpValidation/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/HelpSupport" element={<HelpSupport/>} />

      </Routes>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ top: '50%', transform: 'translateY(-50%)' }} // Center vertically
      />
    </AuthProvider>
  );
}

export default App;
