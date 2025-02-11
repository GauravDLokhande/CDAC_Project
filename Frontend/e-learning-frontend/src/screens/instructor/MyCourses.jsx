import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PencilIcon, ArrowPathIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Card, CardHeader, CardBody, Typography, Tooltip, IconButton } from "@material-tailwind/react";
import Navbar from '../../components/global/Navbar';
import Footer from '../../components/global/Footer';

const InstructorCourses = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchUserFromLocalStorage = () => {
      const userString = localStorage.getItem("user");
      if (userString) {
        const user = JSON.parse(userString);
        setUser({
          name: `${user.firstName} ${user.lastName}`,
          role: user.role,
          profilePicture: user.profilePic || "",
          designation: user.designation,
          bio: user.bio,
          email: user.email,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    fetchUserFromLocalStorage();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} />
      <main className="flex-grow p-1 overflow-x-hidden">
        <div>
          <Card className="mb-10 p-6 bg-[#f4eeff]">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <Typography variant="h5" color="blue-gray" className="text-3xl font-bold text-[#424874] mb-6">
                My Courses
              </Typography>
            </CardHeader>
            <CardBody className="px-0">
              {courses.length > 0 ? (
                <table className="w-full border-collapse border border-[#a6b1e1]">
                  <thead>
                    <tr className="bg-[#Dcd6f7]">
                      <th className="border border-[#a6b1e1] p-2 text-[#424874]">ID</th>
                      <th className="border border-[#a6b1e1] p-2 text-[#424874]">Course Name</th>
                      <th className="border border-[#a6b1e1] p-2 text-[#424874]">Modules</th>
                      <th className="border border-[#a6b1e1] p-2 text-[#424874]">Students</th>
                      <th className="border border-[#a6b1e1] p-2 text-[#424874]">Status</th>
                      <th className="border border-[#a6b1e1] p-2 text-[#424874]">Last Updated</th>
                      <th className="border border-[#a6b1e1] p-2 text-[#424874]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map((course) => (
                      <tr key={course.id} className="text-center border border-[#a6b1e1]">
                        <td className="border border-[#a6b1e1] p-2">{course.id}</td>
                        <td className="border border-[#a6b1e1] p-2">{course.title}</td>
                        <td className="border border-[#a6b1e1] p-2">{course.modules}</td>
                        <td className="border border-[#a6b1e1] p-2">{course.students}</td>
                        <td className={`border border-[#a6b1e1] p-2 ${course.status === "Completed" ? "text-green-600" : course.status === "Ongoing" ? "text-blue-600" : "text-yellow-600"}`}>
                          {course.status}
                        </td>
                        <td className="border border-[#a6b1e1] p-2">{course.updatedAt}</td>
                        <td className="border border-[#a6b1e1] p-2 flex justify-center gap-2">
                          {/* Add Module */}
                          <Tooltip content="Add Module">
                            <Link to={`/instructor/courses/${course.id}/addmodules`} className="cursor-pointer">
                              <IconButton variant="text">
                                <PencilIcon className="h-5 w-5 text-[#424874]" />
                              </IconButton>
                            </Link>
                          </Tooltip>

                          {/* Update Module */}
                          <Tooltip content="Update Module">
                            <Link to={`/instructor/courses/${course.id}/updatemodule`} className="cursor-pointer">
                              <IconButton variant="text">
                                <ArrowPathIcon className="h-5 w-5 text-[#1d4ed8]" />
                              </IconButton>
                            </Link>
                          </Tooltip>

                          {/* Delete Module */}
                          <Tooltip content="Delete Module">
                            <IconButton
                              variant="text"
                              className="cursor-pointer"
                              onClick={() => {
                                console.log(`Delete module for course ${course.id}`);
                                // Implement delete functionality
                              }}
                            >
                              <TrashIcon className="h-5 w-5 text-[#dc2626]" />
                            </IconButton>
                          </Tooltip>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <Typography color="gray" className="mt-4 text-center">No courses assigned to you.</Typography>
              )}
            </CardBody>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InstructorCourses;
