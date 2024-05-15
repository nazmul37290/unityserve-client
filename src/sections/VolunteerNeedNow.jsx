import { Link } from "react-router-dom";
import VolunteerCard from "../components/VolunteerCard";

import { FaArrowRight } from "react-icons/fa6";
import axios from "axios";
import { useEffect, useState } from "react";

const VolunteerNeedNow = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/posts`).then((result) => {
      console.log(result.data);
      setPosts(result.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="bg-[#91C591] p-4 lg:p-10">
      <h1 className="text-xl pt-4 lg:text-3xl font-bold text-center max-w-fit mx-auto pb-2 border-b-light border-b-2">
        Volunteer Need Now
      </h1>
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto mt-4 md:mt-16">
        {loading ? (
          <div className="text-center col-span-3">
            <span className="loading loading-infinity loading-lg"></span>
          </div>
        ) : (
          <>
            {posts?.slice(0, 6).map((post) => {
              return (
                <div
                  key={post._id}
                  className="flex justify-center items-center"
                >
                  <VolunteerCard post={post}></VolunteerCard>;
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className="flex justify-center  my-16">
        <Link to={"/needVolunteer"}>
          <button className="border-2 text-base-100 font-bold hover:bg-base-100 hover:text-middle  border-base-100 rounded-full py-2 px-6 flex items-center gap-2">
            See All{" "}
            <span>
              <FaArrowRight></FaArrowRight>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerNeedNow;
