import Sidebar from '../../components/admin/Sidebar';
import AddCourse from '../../components/admin/AddCourse';

const AddCourseScreen = () => {
  const mockUser = {
    name: "John Doe",
    role: "user_admin",
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const instructors = [
    { id: 1, name: "Dr. John Smith" },
    { id: 2, name: "Prof. Emily Johnson" },
    { id: 3, name: "Dr. Michael Brown" },
    { id: 4, name: "Dr. Sarah Wilson" },
    { id: 5, name: "Prof. David Martinez" },
    { id: 6, name: "Dr. Anna Taylor" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar user={mockUser} />

      {/* Main Content */}
      <div className="flex-1 flex justify-center items-center p-8">
        <AddCourse instructors={instructors} />
      </div>
    </div>
  );
};

export default AddCourseScreen;
