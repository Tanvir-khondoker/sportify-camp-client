import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import classNames from 'classnames';
import img from '../../../public/assets/loginImg/4419038.jpg';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((Result) => {
        const user = Result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row lg:items-center w-full">
        <div className="text-center lg:text-left w-1/2">
          <img
            src={img}
            style={{
              borderRadius: '25px',
              marginLeft: '130px',
              marginTop: '60px',
            }}
            className="py-3 h-[55vh] rounded-xl mb-2 lg:mb-0 lg:mr-2"
            alt=""
          />
        </div>

        <form
          onSubmit={handleLogin}
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
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    className={classNames(
                      'input',
                      'input-bordered',
                      'w-full',
                      showPassword ? 'pr-12' : ''
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
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary w-full"
                  value="Login"
                />

                <p className="text-center mt-5 font-bold">
                  New to SportifyCamp?
                  <Link to="/signup" className="text-amber-600 ">
                    Sign Up
                  </Link>{' '}
                </p>

                <div>
                  <button className="flex items-center gap-2 btn btn-outline mt-8 mb-3 mx-auto">
                    <FaGoogle /> sign in with google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
