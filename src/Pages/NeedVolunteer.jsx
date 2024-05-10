import NavbarBg from "../components/NavbarBg";
import banner from "../assets/banner.jpg";
import VolunteerCard from "../components/VolunteerCard";
const NeedVolunteer = () => {
  return (
    <div>
      <NavbarBg
        img={banner}
        sectionTitle={"_________Need Volunteer?________"}
        title={"Volunteer Opportunities: Make Your Mark, Create Change"}
      ></NavbarBg>
      <div>
        <h1 className="text-xl mt-24 lg:text-3xl font-bold text-center max-w-fit mx-auto pb-2 border-b-light border-b-2">
          Need Volunteer
        </h1>
        <div className="max-w-7xl mx-auto flex justify-end mt-2">
          <label className="w-1/4  input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>

        <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mt-16">
          <div className="flex items-center justify-center">
            <VolunteerCard></VolunteerCard>
          </div>
          <div className="flex items-center justify-center">
            <VolunteerCard></VolunteerCard>
          </div>
          <div className="flex items-center justify-center">
            <VolunteerCard></VolunteerCard>
          </div>
          <div className="flex items-center justify-center">
            <VolunteerCard></VolunteerCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedVolunteer;
