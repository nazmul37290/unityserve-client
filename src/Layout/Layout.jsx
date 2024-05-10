import { Outlet } from "react-router-dom";
import Navabr from "../components/Navabr";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="font-roboto">
      {/* navbar */}
      <Navabr></Navabr>
      <Toaster></Toaster>
      {/* outlet */}
      <Outlet></Outlet>
      {/* footer */}
    </div>
  );
};

export default Layout;
