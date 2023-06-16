import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import PopularClasses from "../popularClasses/PopularClasses";
import PopularInstructors from "../../Instructor/popularInstructors/PopularInstructors";
import Review from "../../../../../brain-box-toys/src/component/reviews/Review";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SportifyCamp | Home</title>
      </Helmet>
      <Slider />
      <PopularClasses />
      <PopularInstructors />
      <Review />
    </div>
  );
};

export default Home;
