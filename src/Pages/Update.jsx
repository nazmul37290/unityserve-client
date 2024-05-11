import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import banner from "../assets/banner.jpg";
import "react-datepicker/dist/react-datepicker.css";
import NavbarBg from "../components/NavbarBg";
const Update = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());

  const handleUpdate = () => {};
  return (
    <div>
      <NavbarBg
        img={banner}
        sectionTitle={"__________Making a difference_________"}
        title={`Together we can
              create positive change
            in the world`}
      ></NavbarBg>
      <div className="mt-10">
        <h1 className="text-xl lg:text-3xl font-bold text-center max-w-fit mx-auto pb-2 border-b-light border-b-2">
          Update Post
        </h1>
        <div>
          <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <form
              onSubmit={handleUpdate}
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
                value="Update"
              />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Update;
