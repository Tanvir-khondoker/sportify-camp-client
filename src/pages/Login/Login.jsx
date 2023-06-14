import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import classNames from "classnames";
import { useContext } from "react";
import img from "../../../public/assets/loginImg/4419038.jpg";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = new URLSearchParams(location.search).get("from") || "/";

  const { signIn } = useContext(AuthContext);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;

    signIn(email, password)
      .then((Result) => {
        const user = Result.user;
        console.log(user);
        navigate(from);
        reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Helmet>
        <title>SportifyCamp | Login</title>
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
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col items-center justify-center w-full lg:w-1/2"
          >
            <h1 className="text-center text-4xl font-bold mt-10 mb-6">
              Login Now
            </h1>
            <div className="card w-[500px] shadow-2xl bg-base-100">
              <div className="card-body space-y-4 p-4 lg:p-8">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    {...register("email", { required: true })}
                    className="input input-bordered w-full"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password", { required: true })}
                      className={classNames(
                        "input",
                        "input-bordered",
                        "w-full",
                        showPassword ? "pr-12" : ""
                      )}
                    />
                    {showPassword ? (
                      <FaEyeSlash
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <FaEye
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                        onClick={() => setShowPassword(true)}
                      />
                    )}
                  </div>
                  {errors.password && (
                    <span className="text-red-600">Password is required</span>
                  )}
                </div>

                <button className="btn btn-primary w-full" type="submit">
                  Sign In
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 w-full mt-6">
              <span className="text-xs text-gray-500">
                Do not have an account?
              </span>
              <Link
                to="/signup"
                className="btn btn-link text-base-content"
                tabIndex="-1"
              >
                Sign Up
              </Link>
            </div>

            <div className="divider-text">or</div>

            <div className="flex flex-col space-y-2">
              <SocialLogin />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
