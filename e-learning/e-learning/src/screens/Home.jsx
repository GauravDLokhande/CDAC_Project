import Navbar from "../components/Navbar";
// import Cards from "../components/Cards"
import Carousel_Intro from "../components/Carousel_Intro";
import UseBodyCards from "./useBodyCards";

const Home = () => {
  return (
    <div className="p-1 overflow-x-hidden ">
        
          <Navbar />
        <Carousel_Intro />
        {/* <Cards /> */}
        <UseBodyCards />
        </div>
            




  )
}
  export default Home;