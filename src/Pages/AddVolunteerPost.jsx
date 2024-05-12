import NavbarBg from "../components/NavbarBg";
import banner from "../assets/banner.jpg";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
const AddVolunteerPost = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);

  // const day = startDate.getDate();
  // const month = startDate.getMonth();
  // const year = startDate.getFullYear();
  // const formatDate = `${day}/${month}/${year}`;

  const handleAddPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.username.value;
    const email = form.userEmail.value;
    const title = form.title.value;
    const thumbnail = form.thumbnailUrl.value;

    const description = form.description.value;
    const category = form.category.value;
    const volunteerCount = form.volunteerCount.value;
    const location = form.location.value;
    const deadline = startDate;

    const post = {
      organizer: { name, email },
      title,
      thumbnail,
      description,
      category,
      volunteerCount,
      location,
      deadline,
    };
    console.log(post);
  };
  return (
    <div>
      <Helmet>
        <title>UNITYSERVE | Add volunteer</title>
      </Helmet>
      <NavbarBg
        img={banner}
        sectionTitle={"__________Making a difference_________"}
        title={`Together we can
              create positive change
            in the world`}
      ></NavbarBg>
      <div className="mt-10">
        <h1 className="text-xl lg:text-3xl font-bold text-center max-w-fit mx-auto pb-2 border-b-light border-b-2">
          Add volunteer Need Post
        </h1>
        <div>
          <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <form
              onSubmit={handleAddPost}
              className="container flex flex-col mx-auto space-y-12"
            >
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                <div className="grid grid-cols-6 gap-4 col-span-full ">
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="firstname" className="text-sm">
                      Name
                    </label>
                    <input
                      value={user?.displayName}
                      readOnly
                      name="username"
                      id=""
                      type="text"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="lastname" className="text-sm">
                      Email
                    </label>
                    <input
                      value={user?.email}
                      readOnly
                      name="userEmail"
                      id=""
                      type="email"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="email" className="text-sm">
                      Post Title
                    </label>
                    <input
                      name="title"
                      type="text"
                      placeholder="post title"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="email" className="text-sm">
                      Thumbnail Url
                    </label>
                    <input
                      name="thumbnailUrl"
                      type="text"
                      placeholder="Thumbnail URL"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="address" className="text-sm">
                      Location
                    </label>
                    <input
                      name="location"
                      type="text"
                      placeholder="Location"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="city" className="text-sm">
                      Category
                    </label>
                    <select
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                      name="category"
                      id=""
                    >
                      <option value="Healthcare">Healthcare</option>
                      <option value="Education">Education</option>
                      <option value="Social Service">Social Service</option>
                      <option value="Animal welfare">Animal welfare</option>
                    </select>
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="state" className="text-sm">
                      No. of volunteer needed
                    </label>
                    <input
                      name="volunteerCount"
                      type="number"
                      placeholder="volunteer count"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="zip" className="text-sm">
                      Deadline
                    </label>
                    <br />
                    <DatePicker
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                      showIcon
                      selected={startDate}
                      dateFormat="d/ M/ yyyy"
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full ">
                  <div className="col-span-full">
                    <label htmlFor="bio" className="text-sm">
                      Description
                    </label>
                    <textarea
                      name="description"
                      id="bio"
                      placeholder="Description"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    ></textarea>
                  </div>
                </div>
              </fieldset>
              <input
                type="submit"
                className="btn btn-full bg-light text-white font-bold text-lg"
                value="Add Post"
              />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddVolunteerPost;
