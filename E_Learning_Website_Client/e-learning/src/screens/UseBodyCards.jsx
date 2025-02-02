import Cards from "../components/Cards";
import image_1 from "../assets/Course_Images/image_1.png";
import image_2 from "../assets/Course_Images/image_2.png";
import image_3 from "../assets/Course_Images/image_3.png";
import image_4 from "../assets/Course_Images/image_4.png";
import image_6 from "../assets/Course_Images/image_6.png";
import image_7 from "../assets/Course_Images/image_7.png";

const cardData = [
  { image: image_1, title: "Card 1" },
  { image: image_2, title: "Card 2" },
  { image: image_3, title: "Card 3" },
  { image: image_4, title: "Card 4" },
  { image: image_6, title: "Card 6" },
  { image: image_7, title: "Card 7" },
];

const UseBodyCards = () => {
  return (
      <div className="grid grid-cols-4 gap-2">
        {cardData.map((card, index) => (
          <Cards key={index} image={card.image} title={card.title} />
        ))}
      </div>
  );
};

export default UseBodyCards;