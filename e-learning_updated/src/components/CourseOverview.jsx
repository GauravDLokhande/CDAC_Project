import React, { useEffect, useState } from "react";
import Instructor from "../components/Instructor";
import { fetchLessonData } from "../services/realLessonService";

const CourseOverview = ({ lessonId }) => {
  const [lessonTitle, setLessonTitle] = useState("Loading...");
  const [lessonContent, setLessonContent] = useState("Loading content...");

  useEffect(() => {
    const getLessonData = async () => {
      if (!lessonId) return; // Prevent fetching if lessonId is undefined
      try {
        const lessonData = await fetchLessonData(lessonId);
        setLessonTitle(lessonData.lessonTitle);
        setLessonContent(lessonData.lessonContent);
      } catch (error) {
        console.error("Error fetching lesson data:", error);
      }
    };
    getLessonData();
  }, [lessonId]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{lessonTitle}</h1>
      <p className="mb-4">{lessonContent}</p>
      <Instructor />
    </div>
  );
};

export default CourseOverview;
