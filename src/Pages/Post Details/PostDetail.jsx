import NavbarBg from "../../components/NavbarBg";
import banner from "../../assets/banner3.jpg";
import { FaEnvelope, FaFlag, FaLocationDot, FaPerson } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import BeAVolunteerModal from "./BeAVolunteerModal";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";

import { AuthContext } from "../../Provider/AuthProvider";

const PostDetail = () => {
  const { user } = useContext(AuthContext);
  const { data } = useLoaderData();
  console.log(data.data);

  const {
    category,
    deadline,
    description,
    location,
    thumbnail,
    organizer,
    title,
    volunteersNeeded,
  } = data;
  const handleOpenModal = () => {
    if (user.email === organizer.email) {
      return Swal.fire({
        icon: "error",
        title: "Nopeee!!",
        text: "You cannot be a volunteer in your post",
      });
    }
    if (volunteersNeeded == 0) {
      return Swal.fire({
        icon: "error",
        title: "Sorry!!",
        text: "Volunteer Need over",
      });
    }
    document.getElementById("my_modal_2").showModal();
  };
  return (
    <div>
      <Helmet>
        <title>UNITYSERVE | Post Details</title>
      </Helmet>
      <NavbarBg
        img={banner}
        sectionTitle={"__________Post Details_________"}
        title={`Explore Volunteer Opportunities, Engage with Causes You Care About, and Transform Lives`}
      ></NavbarBg>
      <div
        className="lg:h-[750px]  max-w-7xl mx-auto rounded-2xl relative border-light border-2 overflow-clip flex flex-col
      lg:flex-row shadow-lg justify-center my-10 p-2 md:p-10 gap-10 bg-base-100 "
      >
        <div className="h-full flex flex-col lg:w-1/2">
          <div className="h-full lg:h-[750px] w-full md:relative">
            <img src={thumbnail} className="h-full   w-full" alt="" />

            <div className="h-[150px] hidden bottom-10 rounded-3xl w-[300px] bg-light text-base-100 md:flex gap-5 text-lg p-4 absolute right-0">
              <FaFlag className="text-4xl w-1/3 mt-5"></FaFlag>
              <div>
                <h1 className="font-bold text-2xl">
                  We are making a <br />
                  Difference
                </h1>
                <p className="text-sm">
                  Join our vibrant community of passionate volunteers dedicated
                  to making a positive impact.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 py-2 md:py-10 text-lg text-black ">
          <div className="flex justify-around">
            <p className="flex items-center">
              <FaLocationDot></FaLocationDot> {location}
            </p>
            <p className="flex items-center">
              <BiCategory></BiCategory> {category}
            </p>
          </div>
          <h1 className="uppercase text-center md:text-start text-2xl mt-10 md:text-5xl font-bold text-main">
            {title}
          </h1>
          <p className="mt-4">{description}</p>
          <p className="bg-light text-base-100 w-fit px-6 mt-5 py-2 rounded-xl ">
            Number of Volunteer needed:{" "}
            <span className="font-bold">{volunteersNeeded}</span>
          </p>
          <p className="mt-2 font-bold">
            Deadline: <span>{deadline.slice(0, 10)}</span>
          </p>
          <div className="mt-5">
            <p className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="flex items-center font-bold gap-1">
                <FaPerson></FaPerson> Organizer Name:
              </span>
              <span>{organizer?.name}</span>
            </p>
            <p className="flex flex-col md:flex-row md:items-center  gap-2">
              <span className="flex items-center gap-1 font-bold">
                <FaEnvelope></FaEnvelope> Organizer email:
              </span>

              <span>{organizer?.email}</span>
            </p>
          </div>
          <div>
            <button
              onClick={handleOpenModal}
              className="btn mt-16 w-full hover:bg-light bg-main text-base-100"
            >
              Be a Volunteer
            </button>
          </div>
        </div>
      </div>
      <BeAVolunteerModal id="my_modal_1" data={data}></BeAVolunteerModal>
    </div>
  );
};

export default PostDetail;
