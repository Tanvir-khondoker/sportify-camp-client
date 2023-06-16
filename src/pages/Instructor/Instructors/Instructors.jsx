import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useTeacher from "../../../hooks/useTeacher";
import Teacher from "../Teacher";

const Instructors = () => {
    const [teacher] = useTeacher();
  

  return (
    <div className="mx-auto py-24">
        <Helmet>
        <title>SportifyCamp | Instructors</title>
      </Helmet>
      <SectionTitle
        subHeading={"our"}
        heading={"All Instructors"}
      ></SectionTitle>
      <div className="px-32 lg:px-48 grid md:grid-cols-2 lg:grid-cols-3 ">
        {teacher.map((teacher) => (
          <Teacher key={teacher._id} {...teacher} />
        ))}
      </div>
    </div>
    );
};

export default Instructors;




