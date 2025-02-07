import React, { useEffect, useState } from "react";
import { fetchLessonData } from "../services/realLessonService";

const VideoPanel = ({ lessonId }) => {
  const [lessonVideoUrl, setLessonVideoUrl] = useState("");

  useEffect(() => {
    const getLessonData = async () => {
      if (!lessonId) return; // Prevent fetching if lessonId is undefined
      try {
        const lessonData = await fetchLessonData(lessonId);
        setLessonVideoUrl(lessonData.lessonVideoUrl);
      } catch (error) {
        console.error("Error fetching lesson data:", error);
      }
    };
    getLessonData();
  }, [lessonId]);

  return (
    <div className="w-full h-[500px] bg-black rounded-lg shadow-lg">
      <video
        className="w-full h-full rounded-lg max-w-full"
        controls
        autoPlay
        src={lessonVideoUrl || "https://www.w3schools.com/html/mov_bbb.mp4"}
      />
    </div>
  );
};

export default VideoPanel;
