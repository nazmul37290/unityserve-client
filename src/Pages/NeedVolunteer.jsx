import NavbarBg from "../components/NavbarBg";
import banner from "../assets/banner.jpg";
import VolunteerCard from "../components/VolunteerCard";
import { IoGridOutline } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { useContext, useState } from "react";
import { ThemeContext } from "../components/Navabr";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
const NeedVolunteer = () => {
  const { data } = useLoaderData();
  const [allData, setALlData] = useState(data);
  const [cardView, setCardView] = useState(false);
  const theme = useContext(ThemeContext);

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    console.log(search);
    axios(`${import.meta.env.VITE_URL}/posts?title=${search}`).then(
      (result) => {
        console.log(result.data);
        setALlData(result.data);
      }
    );
  };
  console.log(allData);

  return (
    <div>
      <Helmet>
        <title>UNITYSERVE | Need Volunteer</title>
      </Helmet>
      <NavbarBg
        img={banner}
        sectionTitle={"_________Need Volunteer?________"}
        title={"Volunteer Opportunities: Make Your Mark, Create Change"}
      ></NavbarBg>
      <div>
        <h1 className="text-xl mt-24 lg:text-3xl font-bold text-center max-w-fit mx-auto pb-2 border-b-light border-b-2">
          Need Volunteer
        </h1>
        <div className="max-w-7xl mx-auto flex items-center justify-end mt-2">
          <form onSubmit={handleSearch}>
            <label className="w-full rounded-lg flex mr-2 items-center gap-2">
              <input
                type="text"
                name="search"
                className=""
                placeholder="Search"
              />
              <input
                type="submit"
                className="btn bg-light rounded-lg text-white"
                value="search"
              />
            </label>
          </form>
          <button onClick={() => setALlData(data)} className="btn">
            Reset
          </button>
          <div>
            <button onClick={() => setCardView(true)} className="text-3xl mx-3">
              <IoGridOutline />
            </button>
            <button
              onClick={() => setCardView(false)}
              className="text-3xl mx-3"
            >
              <FaList />
            </button>
          </div>
        </div>

        {cardView ? (
          <>
            {/* cards container here */}
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mt-16">
              {allData?.map((post, i) => {
                return (
                  <div key={i} className="flex items-center justify-center">
                    <VolunteerCard post={post}></VolunteerCard>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            {/* table container here */}
            <div
              className={`max-w-7xl mt-20 mx-auto ${
                theme === "forest" ? "bg-red-500" : "bg-white"
              } `}
            >
              <div className="overflow-x-auto">
                <table className="table ">
                  {/* head */}
                  <thead>
                    <tr className="text-center">
                      <th>Title</th>
                      <th>Category</th>
                      <th>No of Volunteer need</th>
                      <th>Deadline</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {allData?.map((post) => {
                      const {
                        _id,
                        category,
                        deadline,
                        description,
                        location,
                        thumbnail,
                        organizer,
                        title,
                        volunteersNeeded,
                      } = post;
                      return (
                        <tr key={_id} className="text-center">
                          <td>
                            <div className="flex items-center gap-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img
                                    src={thumbnail}
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">{title}</div>
                              </div>
                            </div>
                          </td>
                          <td>
                            {" "}
                            <span className="bg-main text-white p-2 rounded-lg">
                              {category}
                            </span>
                          </td>
                          <td>{volunteersNeeded}</td>
                          <td>{deadline.slice(0, 10)}</td>
                          <th>
                            <Link to={`/postDetails/${_id}`}>
                              <button className="btn bg-light text-white btn-sm">
                                View Details
                              </button>
                            </Link>
                          </th>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NeedVolunteer;
