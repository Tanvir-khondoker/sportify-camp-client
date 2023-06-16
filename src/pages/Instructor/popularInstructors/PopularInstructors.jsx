import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useTeacher from "../../../hooks/useTeacher";
import Teacher from "../Teacher";

const PopularInstructors = () => {
    const [teacher] = useTeacher();
  const sortedTeachers = teacher.sort((a, b) => b.enrolled - a.enrolled);
  const popularTeachers = sortedTeachers.slice(0, 6);

  return (
    <div className="mx-auto">
      <SectionTitle
        subHeading={"our"}
        heading={"Top Instructors"}
      ></SectionTitle>
      <div className="px-32 lg:px-48 grid md:grid-cols-2 lg:grid-cols-3 ">
        {popularTeachers.map((teacher) => (
          <Teacher key={teacher._id} {...teacher} />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;