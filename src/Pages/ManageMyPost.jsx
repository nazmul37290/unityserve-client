import NavbarBg from "../components/NavbarBg";

import { MdDelete, MdEdit } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../css/app.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
const ManageMyPost = () => {
  const [loading, setLoading] = useState(true);
  const [myPosts, setMyPosts] = useState([]);
  const [myVolunteerRequests, setMyVolunteerRequests] = useState([]);
  const { user } = useContext(AuthContext);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Post will be deleted",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_URL}/posts/${id}`, {
            withCredentials: true,
          })
          .then((result) => {
            console.log(result);
            if (result.data.deletedCount) {
              const newPosts = myPosts.filter((post) => post._id != id);
              setMyPosts(newPosts);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  const handleCancelReq = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Request will be canceled",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_URL}/beAVolunteer/${id}`, {
            withCredentials: true,
          })
          .then((result) => {
            console.log(result);
            if (result.data.deletedCount) {
              const newRequests = myVolunteerRequests.filter(
                (post) => post._id != id
              );
              setMyVolunteerRequests(newRequests);
              Swal.fire({
                title: "Canceled!",
                text: "Your volunteer req has been canceled.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/myPosts?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((result) => {
        setMyPosts(result.data);
        setLoading(false);
      });
  }, [user?.email]);

  useEffect(() => {
    axios

      .get(
        `${import.meta.env.VITE_URL}/volunteerRequests?email=${user?.email}`,
        { withCredentials: true }
      )
      .then((result) => {
        console.log(result.data);
        setMyVolunteerRequests(result.data);
        setLoading(false);
      });
  }, [user?.email]);

  return (
    <div>
      <Helmet>
        <title>UNITYSERVE | Manage my posts</title>
      </Helmet>
      <div>
        <NavbarBg></NavbarBg>
      </div>

      <div className="max-w-7xl mx-auto min-h-screen">
        <Tabs>
          <TabList>
            <Tab>MY POSTS</Tab>
            <Tab>REQUESTED POSTS</Tab>
          </TabList>

          <TabPanel>
            {/* my posts section */}
            <section className="mt-10">
              <div className="container p-2 mx-auto sm:p-4 text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">
                  MY POSTS
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs">
                    <colgroup>
                      <col />
                      <col />
                      <col />
                      <col />
                      <col />
                      <col className="w-24" />
                    </colgroup>
                    <thead className="bg-gray-300">
                      <tr className="text-left">
                        <th className="p-3">No</th>
                        <th className="p-3">Title</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Deadline</th>
                        <th className="p-3">No of Volunteer</th>
                        <th className="p-3 text-right">Amount</th>
                        <th className="p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <div className="text-center col-span-3">
                          <span className="loading loading-infinity loading-lg"></span>
                        </div>
                      ) : myPosts.length > 0 ? (
                        myPosts?.map((post, i) => {
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
                            <tr
                              key={_id}
                              className="border-b border-opacity-20 border-gray-300 bg-gray-50"
                            >
                              <td className="p-3">
                                <p>{i + 1}</p>
                              </td>
                              <td className="p-3">
                                <p>{title}</p>
                              </td>
                              <td className="p-3">
                                <p>{category}</p>
                              </td>
                              <td className="p-3">
                                <p>{deadline.slice(0, 10)}</p>
                              </td>
                              <td className="p-3">
                                <p>{volunteersNeeded}</p>
                              </td>
                              <td className="p-3 text-right">
                                <Link to={`/updatePost/${_id}`}>
                                  <button className="px-3 py-1 font-semibold rounded-md bg-light text-gray-50">
                                    <span className="flex items-center">
                                      Update <MdEdit></MdEdit>
                                    </span>
                                  </button>
                                </Link>
                              </td>
                              <td className="p-3 text-center">
                                <button
                                  onClick={() => handleDelete(_id)}
                                  className="px-3 py-1 font-semibold rounded-md bg-red-600 text-gray-50"
                                >
                                  <span className="flex items-center">
                                    Delete <MdDelete></MdDelete>
                                  </span>
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr className="mt-10">
                          <td colSpan={7} className="text-center p-10 text-xl">
                            You have not posted for any volunteer yet !!!
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel>
            {/* my requested section */}
            <section className="mt-10">
              <div className="container p-2 mx-auto sm:p-4 text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">
                  MY REQUESTED POSTS
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs">
                    <colgroup>
                      <col />
                      <col />
                      <col />
                      <col />
                      <col />
                      <col className="w-24" />
                    </colgroup>
                    <thead className="bg-gray-300">
                      <tr className="text-left">
                        <th className="p-3">No</th>
                        <th className="p-3">Title</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Deadline</th>
                        <th className="p-3">No of Volunteer</th>
                        <th className="p-3 text-right"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <div className="text-center col-span-3">
                          <span className="loading loading-infinity loading-lg"></span>
                        </div>
                      ) : myVolunteerRequests.length > 0 ? (
                        myVolunteerRequests?.map((post, i) => {
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
                            <tr
                              key={post._id}
                              className="border-b border-opacity-20 border-gray-300 bg-gray-50"
                            >
                              <td className="p-3">
                                <p>{i + 1}</p>
                              </td>
                              <td className="p-3">
                                <p>{title}</p>
                              </td>
                              <td className="p-3">
                                <p>{category}</p>
                              </td>
                              <td className="p-3">
                                <p>{deadline.slice(0, 10)}</p>
                              </td>
                              <td className="p-3">
                                <p>{volunteersNeeded}</p>
                              </td>

                              <td className="p-3 text-center">
                                <button
                                  onClick={() => handleCancelReq(_id)}
                                  className="px-3 py-1 font-semibold rounded-md bg-red-600 text-gray-50"
                                >
                                  <span className="flex items-center">
                                    Cancel <MdDelete></MdDelete>
                                  </span>
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr className="mt-10">
                          <td colSpan={6} className="text-center p-10 text-xl">
                            You have not requested for any volunteer yet !!!
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ManageMyPost;
