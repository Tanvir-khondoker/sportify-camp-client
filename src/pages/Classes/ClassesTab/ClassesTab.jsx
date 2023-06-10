import CourseCard from "../../../components/CourseCard/CourseCard";

const ClassesTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-11">
            {
              items.map(item =><CourseCard
              key={item._id}
              item={item}
              ></CourseCard> )  
            }
            </div>
    );
};

export default ClassesTab;