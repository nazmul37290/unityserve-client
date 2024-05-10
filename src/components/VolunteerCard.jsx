import { Link } from "react-router-dom";
import bannerImg from "../assets/banner.jpeg";
const VolunteerCard = () => {
  return (
    <div className="relative h-[250px] w-[350px] mb-24">
      <div className="h-[250px] w-[350px]  relative border-4 border-gray-300 rounded-3xl">
        <img src={bannerImg} className="w-full h-full rounded-3xl" alt="" />
      </div>
      <div className="h-[200px] absolute bg-white left-1/2 -translate-x-1/2 -bottom-[100px] w-[300px] hover:scale-110 shadow-lg hover:text-white rounded-3xl duration-1000">
        <div className=" p-4 md:p-4 ">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            Post Title
          </h1>

          <p className="mt-2 text-sm text-gray-600  dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          </p>

          <div className="flex mt-2 item-center gap-4">
            <h1 className="text-sm font-bold text-gray-700 dark:text-gray-200 ">
              Category
            </h1>
            <h1 className="text-sm font-bold text-gray-700 dark:text-gray-200 md:text-sm">
              Deadline
            </h1>
          </div>

          <div className="flex justify-between mt-3 item-center">
            <Link>
              <button className="px-2 py-1 text-xs font-bold text-white bg-light uppercase transition-colors duration-300 transform rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
