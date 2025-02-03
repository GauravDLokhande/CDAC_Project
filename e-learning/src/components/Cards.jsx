

const Cards = ({ image, title }) => {
  return (
    <div>
      <div className="res-card ml-4 mr-4 mt-10 w-[270px] h-[350px] bg-[#f1f5f9] rounded-xl hover:bg-slate-200 transition duration-200 shadow-lg">
        <img
          className="res-logo rounded pb-1 w-[240px] h-[220px]"
          alt="res-logo"
          src={image}
        />
        <h3 className="font-semibold py-2">{title}</h3>
        <h4></h4>
        <h4></h4>
        <h4></h4>
        <h4></h4>
        <h4></h4>
      </div>
    </div>
  );
};

export default Cards;
