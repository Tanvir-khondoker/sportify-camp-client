
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const CourseCard = ({ item }) => {
  const { name, img, instructor, available, price, _id,email } = item;
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const[isAdmin] = useAdmin();
  const[isInstructor] = useInstructor();
  
  
  const handleSelect = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        courseId: _id,
        name,
        instructor,
        instructorEmail:email,
        img,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Course added to the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to enroll in the course",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className={`card w-96 bg-${available === 0 ? 'dark-red ring ring-red-500 ring-offset-base-900' : 'base-100 ring ring-base-200 ring-offset-base-900'} shadow-xl`}>
      <figure className="px-10 pt-10">
        <img className="rounded-xl h-48" src={img} />
      </figure>
      <div className="card-body items-center text-center">
        <p className="flex gap-5">
          <span>Available: {available}.</span>
          <span className="text-amber-500"> Price: {price}$</span>
        </p>
        <h2 className="card-title">Name: {name}</h2>
        <p className="font-semibold">Instructor: {instructor}</p>

        <div className="card-actions">
          <button onClick={() => handleSelect(item)} className="btn btn-primary" disabled={isAdmin || isInstructor || available === 0}>
            Select Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
