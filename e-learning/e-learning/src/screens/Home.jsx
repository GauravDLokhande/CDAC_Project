import Navbar from "../components/Navbar";
// import Cards from "../components/Cards"
import Carousel_Intro from "../components/Carousel_Intro";
import UseBodyCards from "./useBodyCards";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="p-1 overflow-x-hidden ">
        
          <Navbar />
        <Carousel_Intro />
        {/* <Cards /> */}
        <UseBodyCards />
        <Footer/>
        </div>
            




  )
}
  export default Home;