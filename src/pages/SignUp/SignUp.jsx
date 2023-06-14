import { Link, useNavigate } from "react-router-dom";
import img from "../../../public/assets/loginImg/4419038.jpg";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const password = watch("password");

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Passwords do not match",
        text: "Please enter the same password in both fields",
      });
      return;
    }

    createUser(data.email, data.password, data.name, data.photo)
      .then(() => {
        const savedUser = {
          name: data.name,
          email: data.email,
          photo: data.photo,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully",
                showCancelButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
      })
      .catch((error) => {
        console.error("Create user error:", error);
        throw error;
      });
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
                    <span className="text-red-600">
                      Photo URL is required
                    </span>
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
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
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

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) => value === password,
                    })}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="input input-bordered w-full"
                  />
                  {errors.confirmPassword?.type === "required" && (
                    <span className="text-red-600">
                      Confirm Password is required
                    </span>
                  )}
                  {errors.confirmPassword?.type === "validate" && (
                    <span className="text-red-600">
                      Passwords do not match
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
                    Already have an account?{" "}
                    <Link to="/login" className="text-amber-600">
                      Login
                    </Link>{" "}
                  </p>
                  <SocialLogin />
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
