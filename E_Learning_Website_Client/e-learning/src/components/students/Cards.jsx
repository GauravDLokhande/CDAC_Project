import SpotlightCard from "./SpotlightCard";

const Cards = ({ image, title }) => {
  return (
    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 0, 0, 0.1)">
      <div className="w-[270px] h-[350px] bg-white rounded-xl hover:bg-gray-100 transition duration-300 shadow-lg flex flex-col items-center p-4">
        <img className="rounded pb-2 w-[240px] h-[220px] object-cover" alt="res-logo" src={image} />
        <h3 className="font-semibold text-black text-lg mt-2">{title}</h3>
      </div>
    </SpotlightCard>
  );
};

export default Cards;
