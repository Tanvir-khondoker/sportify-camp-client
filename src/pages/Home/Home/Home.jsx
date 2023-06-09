import Slider from "../Slider/Slider";
import PopularClasses from "../popularClasses/PopularClasses";
import PopularInstructors from "../popularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div>
            <Slider/>
            <PopularInstructors/>
            <PopularClasses/>
        </div>
    );
};

export default Home;