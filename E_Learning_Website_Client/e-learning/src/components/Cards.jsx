const Cards = ({ image, title }) => {
  return (
    <div>
      <div className="res-card m-4 p-4 w-[270px] h-[300px] bg-[#f1f5f9] rounded-xl hover:bg-slate-200 transition duration-200 shadow-lg">
        <img
          className="res-logo rounded pb-1 w-[240] h-[150px] m-auto"
          alt="res-logo"
          src={image}
        />
        <h3 className="font-semibold py-2">{title}</h3>
      </div>
    </div>
  );
};

export default Cards