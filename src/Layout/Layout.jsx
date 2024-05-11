import { Outlet } from "react-router-dom";
import Navabr from "../components/Navabr";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="font-roboto">
      {/* navbar */}
      <Navabr></Navabr>
      <Toaster></Toaster>
      {/* outlet */}
      <Outlet></Outlet>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
