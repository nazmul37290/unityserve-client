import banner from "../assets/banner.jpg";
import NavbarBg from "../components/NavbarBg";

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
      <h1 className="">This is the home pages</h1>
    </div>
  );
};

export default Home;
