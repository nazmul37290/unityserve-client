import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import NeedVolunteer from "../NeedVolunteer";

const BeAVolunteerModal = ({ data }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
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
  } = data;
  const handleReqVolunteer = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.username.value;
    const email = form.userEmail.value;
    const title = form.title.value;
    const thumbnail = form.thumbnailUrl.value;
    const volunteerName = form.volunteerName.value;
    const volunteerEmail = form.volunteerEmail.value;
    const suggestion = form.suggestion.value;
    const status = form.status.value;

    const description = form.description.value;
    const category = form.category.value;
    const volunteersNeeded = form.volunteerCount.value;
    const location = form.location.value;
    const deadline = form.deadline.value;

    const volunteer = {
      organizer: { name, email },
      title,
      thumbnail,
      description,
      category,
      volunteersNeeded,
      location,
      deadline,
      volunteerName,
      volunteerEmail,
      suggestion,
      status,
    };
    console.log(volunteer);

    axios
      .post(`${import.meta.env.VITE_URL}/beAVolunteer`, volunteer)
      .then((result) => {
        if (result.data.insertedId) {
          form.reset();

          axios
            .patch(`${import.meta.env.VITE_URL}/beAVolunteer/${_id}`)
            .then((result) => {
              document.getElementById("close-btn").click();
              Swal.fire({
                icon: "success",
                title: "Success",
                text: "Volunteer Requested Successfully",
              });
              navigate(`/postDetails/${_id}`);
            });
        }
      });
  };
  return (
    <dialog id="my_modal_2" className="modal ">
      <div className="modal-box">
        <form
          onSubmit={handleReqVolunteer}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="grid grid-cols-6 gap-4 col-span-full ">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Organizer Name
                </label>
                <input
                  value={organizer.name}
                  readOnly
                  name="username"
                  id=""
                  type="text"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Organizer Email
                </label>
                <input
                  value={organizer.email}
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
                  readOnly
                  value={title}
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
                  readOnly
                  value={thumbnail}
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
                  readOnly
                  value={location}
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
                  readOnly
                  value={category}
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
                  readOnly
                  value={volunteersNeeded}
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
                <input
                  name="deadline"
                  readOnly
                  value={deadline.slice(0, 10)}
                  type="text"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  placeholder="deadline"
                />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full ">
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Description
                </label>
                <textarea
                  value={description}
                  readOnly
                  name="description"
                  id="bio"
                  placeholder="Description"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                ></textarea>
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Volunteer name
                </label>
                <input
                  readOnly
                  value={user?.displayName}
                  name="volunteerName"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Volunteer email
                </label>
                <input
                  readOnly
                  value={user?.email}
                  name="volunteerEmail"
                  type="email"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Suggestion
                </label>
                <textarea
                  name="suggestion"
                  id="bio"
                  placeholder="Suggestion"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                ></textarea>
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Status
                </label>
                <input
                  readOnly
                  value={"Requested"}
                  name="status"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
            </div>
          </fieldset>
          <input
            type="submit"
            className="btn btn-full bg-light text-white font-bold text-lg"
            value="Request"
          />
        </form>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" id="close-btn">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default BeAVolunteerModal;
