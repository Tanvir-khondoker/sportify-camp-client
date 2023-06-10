import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Item from "../../Shared/CourseItem/Item";

const PopularClasses = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("class.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedClasses = data.sort((a, b) => b.enrolled - a.enrolled);
        const popularClasses = sortedClasses.slice(0, 6);
        
        setCourse(popularClasses);
      });
  }, []);

  return (
    <div className="mx-auto">
      <SectionTitle
        subHeading={"From our"}
        heading={"Top classes"}
      ></SectionTitle>
      <div  className="grid md:grid-cols-2 lg:grid-cols-3 ">
        {course.map((item) => (
          <Item key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
