import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Item from "../../Shared/CourseItem/Item";
import useCourse from "../../../hooks/useCourse";

const PopularClasses = () => {
  const [course] = useCourse();
  const sortedClasses = course.sort((a, b) => b.enrolled - a.enrolled);
  const popularClasses = sortedClasses.slice(0, 6);

  return (
    <div className="mx-auto">
      <SectionTitle
        subHeading={"From our"}
        heading={"Top classes"}
      ></SectionTitle>
      <div className="px-32 lg:px-48 grid md:grid-cols-2 lg:grid-cols-3 ">
        {popularClasses.map((item) => (
          <Item key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
