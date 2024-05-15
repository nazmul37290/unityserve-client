import { Helmet } from "react-helmet-async";
import banner from "../assets/banner.jpg";
import Carousel from "../components/Carousel";
import NavbarBg from "../components/NavbarBg";
import VolunteerNeedNow from "../sections/VolunteerNeedNow";
import Faq from "../sections/Faq";
import Testimonial from "../sections/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>UNITYSERVE | HOME</title>
      </Helmet>
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
      <Faq></Faq>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
