import Cards from "../components/Cards"

const cardData = [
  { image: "path/to/image1.jpg", title: "Card 1" },
  { image: "path/to/image2.jpg", title: "Card 2" },
  { image: "path/to/image3.jpg", title: "Card 3" },
  { image: "path/to/image4.jpg", title: "Card 4" },
  { image: "path/to/image5.jpg", title: "Card 5" },
  { image: "path/to/image6.jpg", title: "Card 6" },
  { image: "path/to/image7.jpg", title: "Card 7" },
  { image: "path/to/image8.jpg", title: "Card 8" },
];

const UseBodyCards = () => {
  return (
    <div className="m-10 border-1 border-b-black rounded-2xl shadow-2xl h-[850px] w-[1450px]">
      <div className="grid grid-cols-4 gap-2">
        {cardData.map((card, index) => (
          <Cards key={index} image={card.image} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default UseBodyCards;
