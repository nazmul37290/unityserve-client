import banner from "../assets/banner.jpg";
import Carousel from "../components/Carousel";
import NavbarBg from "../components/NavbarBg";
import VolunteerNeedNow from "../sections/VolunteerNeedNow";

const Home = () => {
  return (
    <div>
      <NavbarBg
        img={banner}
        sectionTitle={"__________Making a difference_________"}
        title={`Together we can
              create positive change
            in the world`}
      ></NavbarBg>

      <div className="mt-24">
        <Carousel></Carousel>
      </div>
      <div className="mt-24">
        <VolunteerNeedNow></VolunteerNeedNow>
      </div>
    </div>
  );
};

export default Home;
