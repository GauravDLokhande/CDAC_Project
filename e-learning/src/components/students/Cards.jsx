import { useNavigate } from "react-router-dom";
import SpotlightCard from "./SpotlightCard";

const Cards = ({ image, title, courseId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${courseId}`);
  };

  return (
    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 0, 0, 0.1)">
      <div className="w-[270px] h-[350px] rounded-xl shadow-lg flex flex-col items-center p-4 cursor-pointer" onClick={handleClick}>
        <img className="rounded pb-2 w-[240px] h-[220px] object-contain" alt="res-logo" src={image} />
        <h3 className="font-semibold text-black text-lg mt-2">{title}</h3>
      </div>
    </SpotlightCard>
  );
};

export default Cards;
