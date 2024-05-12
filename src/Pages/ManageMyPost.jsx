import NavbarBg from "../components/NavbarBg";

import { MdDelete, MdEdit } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../css/app.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const ManageMyPost = () => {
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
                      <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                        <td className="p-3">
                          <p>97412378923</p>
                        </td>
                        <td className="p-3">
                          <p>Microsoft Corporation</p>
                        </td>
                        <td className="p-3">
                          <p>Microsoft Corporation</p>
                        </td>
                        <td className="p-3">
                          <p>14 Jan 2022</p>
                          <p className="text-gray-600">Friday</p>
                        </td>
                        <td className="p-3">
                          <p>01 Feb 2022</p>
                          <p className="text-gray-600">Tuesday</p>
                        </td>
                        <td className="p-3 text-right">
                          <Link to={"/updatePost"}>
                            <button className="px-3 py-1 font-semibold rounded-md bg-light text-gray-50">
                              <span className="flex items-center">
                                Update <MdEdit></MdEdit>
                              </span>
                            </button>
                          </Link>
                        </td>
                        <td className="p-3 text-center">
                          <button className="px-3 py-1 font-semibold rounded-md bg-red-600 text-gray-50">
                            <span className="flex items-center">
                              Delete <MdDelete></MdDelete>
                            </span>
                          </button>
                        </td>
                      </tr>
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
                      <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                        <td className="p-3">
                          <p>97412378923</p>
                        </td>
                        <td className="p-3">
                          <p>Microsoft Corporation</p>
                        </td>
                        <td className="p-3">
                          <p>Microsoft Corporation</p>
                        </td>
                        <td className="p-3">
                          <p>14 Jan 2022</p>
                          <p className="text-gray-600">Friday</p>
                        </td>
                        <td className="p-3">
                          <p>01 Feb 2022</p>
                          <p className="text-gray-600">Tuesday</p>
                        </td>

                        <td className="p-3 text-center">
                          <button className="px-3 py-1 font-semibold rounded-md bg-red-600 text-gray-50">
                            <span className="flex items-center">
                              Cancel <MdDelete></MdDelete>
                            </span>
                          </button>
                        </td>
                      </tr>
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
