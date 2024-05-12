import NavbarBg from "../../components/NavbarBg";
import banner from "../../assets/banner.jpg";
import { FaEnvelope, FaFlag, FaLocationDot, FaPerson } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import BeAVolunteerModal from "./BeAVolunteerModal";
import { Helmet } from "react-helmet-async";

const PostDetail = () => {
  const handleOpenModal = () => {
    document.getElementById("my_modal_2").showModal();
  };
  return (
    <div>
      <Helmet>
        <title>UNITYSERVE | Post Details</title>
      </Helmet>
      <NavbarBg></NavbarBg>
      <div className="h-[750px]  max-w-7xl mx-auto rounded-2xl relative overflow-clip flex shadow-lg justify-center my-10 p-10 gap-10 bg-white ">
        <div className="h-full w-1/2">
          <div className="h-[750px] w-full relative">
            <img src={banner} className="h-full   w-full" alt="" />
            <div className="h-[150px] bottom-10 rounded-3xl w-[300px] bg-light text-white flex gap-5 text-lg p-4 absolute right-0">
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
        <div className="w-1/2 py-10 text-lg text-black ">
          <div className="flex justify-around">
            <p className="flex items-center">
              <FaLocationDot></FaLocationDot> Location
            </p>
            <p className="flex items-center">
              <BiCategory></BiCategory> Healthcare
            </p>
          </div>
          <h1 className="uppercase text-lg mt-10 lg:text-5xl font-bold text-main">
            This is the title
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus
            consequuntur culpa cupiditate reprehenderit nemo blanditiis
            architecto vel. Consequatur, quis.
          </p>
          <p className="bg-light w-fit px-6 mt-5 py-2 rounded-xl ">
            Number of Volunteer needed: <span className="font-bold">10</span>
          </p>
          <p className="mt-2 font-bold">
            Deadline: <span>10/2/2004</span>
          </p>
          <div className="mt-5">
            <p className="flex items-center gap-2">
              <FaPerson></FaPerson> Organizer Name:
              <span>Nazmul Haque</span>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope></FaEnvelope> Organizer email:
              <span>nazmulnjm@gmail.com</span>
            </p>
          </div>
          <div>
            <button
              onClick={handleOpenModal}
              className="btn mt-16 w-full hover:bg-light bg-main text-white"
            >
              Be a Volunteer
            </button>
          </div>
        </div>
      </div>
      <BeAVolunteerModal id="my_modal_1"></BeAVolunteerModal>
    </div>
  );
};

export default PostDetail;
