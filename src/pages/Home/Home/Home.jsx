import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import PopularClasses from "../popularClasses/PopularClasses";
import PopularInstructors from "../popularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>SportifyCamp | Home</title>
        
      </Helmet>
            <Slider/>
            <PopularClasses/>
            <PopularInstructors/>
        </div>
    );
};

export default Home;