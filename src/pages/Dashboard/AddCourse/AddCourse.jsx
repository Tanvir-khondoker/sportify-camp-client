import useAuth from "../../../hooks/useAuth";

const AddCourse = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="">
      <h3 className="pb-2 text-4xl font-semibold text-center border-b-4 border-double border-slate-600">
        Add a new Class{" "}
      </h3>

      <form className="mt-3 ">
        <div className="grid md:grid-cols-3 gap-9">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Class name*</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select className="select select-bordered">
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
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name*</span>
            </label>
            <input
              type="text"
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
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              readOnly
              value="Pending"
            />
          </div>
        </div>

        <input
          type="submit"
          className="btn btn-outline btn-accent mt-3"
          value="Add Class"
        />
      </form>
    </div>
  );
};

export default AddCourse;
