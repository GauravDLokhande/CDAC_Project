import CourseIntroDetails from './../../components/students/CourseIntroDetails';
import Navbar from './../../components/global/Navbar';
import CourseIntroInfo from './../../components/students/CourseIntroInfo';

const CourseIntroScreen = () => {
  return (
 

<div className="p-1 overflow-x-hidden">
<Navbar />
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Left - Course Overview */}
        <div className="md:col-span-2">
          <CourseIntroDetails />
        </div>

        {/* Right - Course Thumbnail & Info (Sticky) */}
        <div className="md:col-span-1 md:sticky top-20">
          <CourseIntroInfo />
        </div>
      </div>
</div>


  );
};

export default CourseIntroScreen;
