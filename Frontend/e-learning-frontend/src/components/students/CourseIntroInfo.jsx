import React from "react";
import image_1 from "../../assets/Carousel/image_1.jpg";

const CourseIntroInfo = () => {
  return (
    <div className="bg-[#2a2e4e]  text-[#f4eeff]  p-6 rounded-lg shadow-lg">
      <img
        src={image_1}
        alt="Course Thumbnail"
        className="w-full   rounded-md object-cover"
      />
      <button className="mt-4 w-full bg-[#424874] hover:bg-[#f4eeff] hover:text-[#424874] text-[#f4eeff] py-2 rounded-lg font-semibold">
        Enroll Course
      </button>
      <p className="mt-4 text-2xl font-bold"> Notes at just ₹3,099</p>
      <button className="mt-2 w-full border bg-[#424874] hover:bg-[#f4eeff] hover:text-[#424874] text-[#f4eeff] hover:border-[#424874] py-2 rounded-lg font-semibold ">
        Add to cart
      </button>
      <p className="mt-2 text-sm text-[#f4eeff]">30-Day Money-Back Guarantee</p>
      <p className="mt-2 text-xs text-[#f4eeff]">Full Lifetime Access</p>
    </div>
  );
};

export default CourseIntroInfo;
