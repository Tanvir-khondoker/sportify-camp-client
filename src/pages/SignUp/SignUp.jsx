import { Link } from "react-router-dom";
import img from "../../../public/assets/loginImg/4419038.jpg";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const { signInWithGoogle,createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password, data.name, data.photo)
  };

  return (
    <>
      <Helmet>
        <title>SportifyCamp | Sign Up</title>
      </Helmet>

      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row lg:items-center w-full">
          <div className="text-center lg:text-left w-1/2">
            <img
              src={img}
              style={{
                borderRadius: "25px",
                marginLeft: "130px",
                marginTop: "60px",
              }}
              className="py-3 h-[55vh] rounded-xl mb-2 lg:mb-0 lg:mr-2"
              alt=""
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center w-full lg:w-1/2"
          >
            <h1 className="text-center text-4xl font-bold mt-10 mb-6">
              Sign Up Now
            </h1>

            <div className="card w-[500px] shadow-2xl bg-base-100">
              <div className="card-body space-y-4 p-4 lg:p-8">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Name"
                    className="input input-bordered w-full"
                  />
                  {errors.name?.type === "required" && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                  />
                  {errors.email?.type === "required" && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photo", { required: true })}
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered w-full"
                  />
                  {errors.photo?.type === "required" && (
                    <span className="text-red-600">Photo URL is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      maxLength: 20,
                      minLength: 6,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered w-full"
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-600">Password is required</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-600">
                      Password must be at least six characters
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="text-red-600">
                      Password should not be greater than 20 characters
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-600">
                      Password must have one uppercase, one lowercase, one
                      number, and one special character
                    </span>
                  )}
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary w-full"
                    type="submit"
                    value="Sign Up"
                  />

                  <p className="text-center mt-5 font-bold">
                    Already have an account?
                    <Link to="/login" className="text-amber-600 ">
                      login
                    </Link>{" "}
                  </p>
                  <button
                    onClick={signInWithGoogle}
                    className="flex items-center gap-2 btn btn-outline mt-8 mb-3 mx-auto"
                  >
                    <FaGoogle /> sign Up with google
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
