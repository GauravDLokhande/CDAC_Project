import Cards from './../../components/students/Cards';

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
    <div className="m-10 border border-gray-300 rounded-xl shadow-xl p-6 bg-white">
      <div className="grid grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <Cards key={index} image={card.image} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default UseBodyCards;
