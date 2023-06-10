
const CourseCard = ({item}) => {
    const {name, img, instructor, available, price} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img className="rounded-xl h-48" src={img} />
  </figure>
  <div className="card-body items-center text-center">
  <p className="flex gap-5">
        <span>Available: {available }.</span>
        <span className="text-amber-500"> Price: {price}$</span>
    </p>
    <h2 className="card-title">Name : {name}</h2>
    <p className="font-semibold">Instructor: {instructor}</p>
    
    <div className="card-actions">
      <button className="btn btn-primary">Select Now</button>
    </div>
  </div>
</div>
    );
};

export default CourseCard;