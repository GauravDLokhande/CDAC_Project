import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
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
import { AuthProvider } from './context/AuthContext';  // Import AuthProvider

function App() {
  // // State to hold the lessonId
  // const [lessonId, setLessonId] = useState(null);
  
  // // Get the lessonId from the URL params (if available)
  // const location = useLocation();

  // useEffect(() => {
  //   // Extract the lessonId from URL params when it changes
  //   const lessonIdFromUrl = new URLSearchParams(location.search).get('lessonId');
  //   if (lessonIdFromUrl) {
  //     setLessonId(lessonIdFromUrl);
  //   } else {
  //     // If no lessonId in URL, use a default one (e.g., 1)
  //     setLessonId(1);
  //   }
  // }, [location]);

  return (
    <AuthProvider>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/editProfile" element={<Profile />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/mycourse/:courseId" element={<MyCourse />} />
        <Route path="/addcontent" element={<CourseScreen />} />
        <Route path="/mylearning" element={<MyLearning />} />
        <Route path="/course/:lessonId" element={<CourseIntroScreen />} /> Pass lessonId in the URL
        {/* <Route path="/course/:lessonId" element={<CourseIntroScreen lessonId={lessonId} />} /> */}
        <Route path="/coursebn" element={<CourseScreenByNeeraj />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
