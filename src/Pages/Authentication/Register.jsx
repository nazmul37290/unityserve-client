import { Link, useNavigate } from "react-router-dom";
import NavbarBg from "../../components/NavbarBg";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import logingif from "../../assets/ligin.json";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, setUser, updateUserProfile, logOut, user } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.imageURL.value;
    const user = { name, email, password, photo };

    if (password.length < 6) {
      setError("password must be more than 6 characters");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("must have a small letter");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("must have a capital letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(name, photo).then((result) => {
          logOut().then(() => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Registered Successfully",
            });
            navigate("/");
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Helmet>
        <title>UNITYSERVE | Register</title>
      </Helmet>
      <NavbarBg></NavbarBg>
      <section className="bg-white h-[800px] dark:bg-gray-900">
        <div className="container flex items-center justify-center mt-20 px-6 mx-auto">
          <div className="w-1/2">
            <Lottie animationData={logingif} loop={true}></Lottie>
          </div>
          <form
            onSubmit={handleRegister}
            className="w-full shadow p-5 max-w-md"
          >
            <h1 className="text-black text-2xl mb-5 font-bold text-center">
              UNITY<span className="text-light">SERVE</span>
            </h1>

            <div className="flex justify-center mx-auto"></div>

            <div className="flex items-center justify-center mt-6">
              <a
                href="#"
                className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-light dark:border-light dark:text-white"
              >
                sign up
              </a>
            </div>

            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>

              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="name"
                name="name"
              />
            </div>
            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>

              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="enter image URL"
                name="imageURL"
              />
            </div>

            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              <input
                type="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
                name="email"
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
                name="password"
              />
            </div>
            <p className="text-red-600">{error}</p>
            <div className="mt-6">
              <input
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-middle rounded-lg hover:bg-light focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                value="Sign Up"
              />

              <div className="mt-6 text-center ">
                <Link
                  to={"/login"}
                  className="text-sm text-middle hover:underline dark:text-blue-400"
                >
                  Already have an account?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
