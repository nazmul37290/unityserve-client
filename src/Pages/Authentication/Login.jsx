import NavbarBg from "../../components/NavbarBg";

import "swiper/css";
import "swiper/css/effect-cards";
import "../../css/app.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import logingif from "../../assets/loginpage.json";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const { loginWithEmailandPassword, signInWithGoogle, user } =
    useContext(AuthContext);
  // if (user) {
  //   navigate("/");
  // }
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailandPassword(email, password)
      .then((result) => {
        console.log(result.user);
        const loggedUser = { email };
        toast.success("Logged in successfully");
        axios
          .post(`${import.meta.env.VITE_URL}/jwt`, loggedUser, {
            withCredentials: true,
          })
          .then((result) => {
            console.log(result.data);
            if (result.data.success) {
              navigate(location.state ? location.state : "/");
            }
          });
        // navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Logged in successfully");
        console.log(result.user);
        const loggedUser = { email: result.user.email };
        axios
          .post(`${import.meta.env.VITE_URL}/jwt`, loggedUser, {
            withCredentials: true,
          })
          .then((result) => {
            console.log(result.data);
            if (result.data.success) {
              navigate(location.state ? location.state : "/");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>UNITYSERVE | Login</title>
      </Helmet>
      <NavbarBg></NavbarBg>
      <div>
        <div>
          <>
            <div className=" max-w-7xl mx-auto flex gap-10 mt-10">
              <div className="w-1/2">
                <Lottie animationData={logingif} loop={true}></Lottie>
              </div>
              <div className="w-1/2 h-full p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex justify-center mx-auto"></div>

                <form onSubmit={handleLogin} className="mt-6">
                  <div>
                    <h1 className="text-black text-2xl mb-5 font-bold text-center">
                      UNITY<span className="text-light">SERVE</span>
                    </h1>
                    <h1 className="text-black mb-16 text-center font-bold text-xl">
                      LOGIN
                    </h1>
                    <label className="block text-sm text-gray-800 dark:text-gray-200">
                      Username
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <label className="block text-sm text-gray-800 dark:text-gray-200">
                        Password
                      </label>
                      <a
                        href="#"
                        className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
                      >
                        Forget Password?
                      </a>
                    </div>

                    <input
                      type="password"
                      name="password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <input
                      type="submit"
                      className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-light rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                      value="Sign In"
                    />
                  </div>
                </form>

                <div className="flex items-center justify-between mt-4">
                  <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                  <a
                    href="#"
                    className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
                  >
                    or login with Social Media
                  </a>

                  <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                </div>

                <div className="flex items-center mt-6 -mx-2">
                  <button
                    onClick={handleGoogleLogin}
                    type="button"
                    className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-light transition-colors duration-300 transform btn rounded-lg hover:bg-light hover:text-white focus:outline-none"
                  >
                    <svg
                      className="w-4 h-4 mx-2 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                    </svg>

                    <span className="hidden mx-2 sm:inline">
                      Sign in with Google
                    </span>
                  </button>
                </div>

                <Link to={"/register"}>
                  <p className="mt-8 text-xs font-light text-center text-light">
                    Dont have an account? Register
                  </p>
                </Link>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Login;
