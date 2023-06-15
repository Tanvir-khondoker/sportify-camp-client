import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddCourse = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  const onSubmit = (data) => {
    const {
      name,
      img,
      instructor,
      email,
      available,
      price,
      status,
      category,
      enrolled
    } = data;

    const newClass = {
      name,
      img,
      instructor,
      email,
      available: parseFloat(available),
      price: parseFloat(price),
      status,
      category,
      enrolled: parseFloat(enrolled)
    };

    axiosSecure
      .post("/courses", newClass)
      .then((response) => {
        const data = response.data;
        console.log("after posting new class", data);
        if (data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} has been saved to DB successfully`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch((error) => {
        console.error("Error posting new class:", error);
      });
  };

  const { user } = useAuth();

  return (
    <div className="">
      <h3 className="pb-2 text-4xl font-semibold text-center border-b-4 border-double border-slate-600">
        Add a new Class{" "}
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <div className="grid md:grid-cols-3 gap-9">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Class name*</span>
            </label>
            <input
              {...register("name", { required: true, maxLength: 120 })}
              type="text"
              placeholder="Class Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled defaultValue="">
                Pick one
              </option>
              <option>dynamic_athletics</option>
              <option>precision_striking</option>
              <option>court_dominance</option>
              <option>endurance_challenge</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Available Seats*</span>
            </label>
            <input
              {...register("available", { required: true, maxLength: 120 })}
              type="number"
              placeholder="Available seat"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Price "
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name*</span>
            </label>
            <input
              type="text"
              {...register("instructor", { required: true, maxLength: 120 })}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              readOnly={user !== null}
              value={user?.displayName || ""}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">
                Instructor Email*
              </span>
            </label>
            <input
              type="text"
              {...register("email", { required: true, maxLength: 120 })}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              readOnly={user !== null}
              value={user?.email || ""}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Class Image url*</span>
            </label>
            <input
              type="text"
              {...register("img", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Status*</span>
            </label>
            <input
              type="text"
              {...register("status", { required: true, maxLength: 120 })}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              readOnly
              value="Pending"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Enrolled*</span>
            </label>
            <input
              type="number"
              {...register("enrolled", { required: true, maxLength: 120 })}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              readOnly
              value={0}
            />
          </div>
        </div>

        <input
          type="submit"
          className="btn btn-outline btn-accent mt-9"
          value="Add Class"
        />
      </form>
    </div>
  );
};

export default AddCourse;
