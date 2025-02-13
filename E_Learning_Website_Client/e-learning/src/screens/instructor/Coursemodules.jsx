import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  PencilIcon,
  ClipboardDocumentListIcon,
  ArrowPathIcon,
  TrashIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";

const CourseModules = () => {
  const { courseId } = useParams();
  const [modules, setModules] = useState([
    { id: 1, title: "Introduction to React", lessons: 4, status: "Completed" },
    { id: 2, title: "React Components", lessons: 6, status: "Ongoing" },
  ]);

  return (
    <div className="p-1 overflow-x-hidden">
      <Navbar />
      <div>
        <Card className="mb-10 p-6 bg-[#f4eeff]">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <Typography
              variant="h5"
              color="blue-gray"
              className="text-3xl font-bold text-[#424874] mb-6"
            >
              Course Modules
            </Typography>
          </CardHeader>
          <CardBody className="px-0">
            {modules.length > 0 ? (
              <table className="w-full border-collapse border border-[#a6b1e1]">
                <thead>
                  <tr className="bg-[#Dcd6f7]">
                    <th className="border border-[#a6b1e1] p-2 text-[#424874]">
                      ID
                    </th>
                    <th className="border border-[#a6b1e1] p-2 text-[#424874]">
                      Module Name
                    </th>
                    <th className="border border-[#a6b1e1] p-2 text-[#424874]">
                      Lessons
                    </th>
                    <th className="border border-[#a6b1e1] p-2 text-[#424874]">
                      Status
                    </th>
                    <th className="border border-[#a6b1e1] p-2 text-[#424874]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {modules.map((module) => (
                    <tr
                      key={module.id}
                      className="text-center border border-[#a6b1e1]"
                    >
                      <td className="border border-[#a6b1e1] p-2">
                        {module.id}
                      </td>
                      <td className="border border-[#a6b1e1] p-2">
                        {module.title}
                      </td>
                      <td className="border border-[#a6b1e1] p-2">
                        {module.lessons}
                      </td>
                      <td
                        className={`border border-[#a6b1e1] p-2 ${
                          module.status === "Completed"
                            ? "text-green-600"
                            : "text-blue-600"
                        }`}
                      >
                        {module.status}
                      </td>
                      <td className="border border-[#a6b1e1] p-2 flex justify-center gap-2">
                        {/* Add Quiz */}
                        <Tooltip content="Add Quiz">
                          <Link
                            to={`/instructor/courses/${courseId}/modules/${module.id}/setquiz`}
                            className="cursor-pointer"
                          >
                            <IconButton variant="text">
                              <PlusCircleIcon className="h-5 w-5 text-[#1d4ed8]"/>
                            </IconButton>
                          </Link>
                        </Tooltip>

                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <Typography color="gray" className="mt-4 text-center">
                No modules available for this course.
              </Typography>
            )}
          </CardBody>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default CourseModules;
