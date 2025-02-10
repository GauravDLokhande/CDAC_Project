import { Carousel } from "@material-tailwind/react";
import image_1 from '../assets/Carousel/image_1.jpg'
import image_2 from '../assets/Carousel/image_2.webp'
import image_3 from '../assets/Carousel/image_3.webp'
import image_4 from '../assets/Carousel/image_4.jpg'
import image_5 from '../assets/Carousel/image_5.jpg'
import image_6 from '../assets/Carousel/image_6.jpg'

const Carousel_Intro = () => {
  return (
    <Carousel
      className="rounded-xl h-[500px] w-[1000px] m-auto mt-10"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      autoplay={true} // Enable autoplay
      autoplayDelay={3000} // Set autoplay delay to 3 seconds
      loop={true} // Enable loop
      transition={{ type: "tween", duration: 0.5 }} // Set smooth transition
    >
      <img
        src={image_1}
        alt="image 1" 
        className="h-full w-full object-cover"
      />
      <img
        src={image_2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={image_3}
        alt="image 3"
        className="h-full w-full object-cover"
      />

      <img
        src={image_4}
        alt="image 3"
        className="h-full w-full object-cover"
      />

      <img
        src={image_5}
        alt="image 3"
        className="h-full w-full object-cover"
      />

      <img
        src={image_6}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};

export default Carousel_Intro;
