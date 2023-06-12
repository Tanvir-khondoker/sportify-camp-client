/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSocialLogin = () => {
     signInWithGoogle()
     .then((result) => {
    // Google sign-in successful
    navigate(from , {replace:true});
    const user = result.user;
  })
  .catch((error) => {
    // Handle errors
    console.error("Google sign-in error:", error);
  });

  };

  return (
    <div>
      <button
        onClick={handleSocialLogin}
        className="flex items-center gap-2 btn btn-outline mt-8 mb-3 mx-auto"
      >
        <FaGoogle /> sign Up with google
      </button>
    </div>
  );
};

export default SocialLogin;


