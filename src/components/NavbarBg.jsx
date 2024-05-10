const NavbarBg = ({ img, sectionTitle, title }) => {
  return (
    <div
      className="bg-cover bg-center navbar-bg-img z-0"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="h-[700px] bg-[rgb(0,0,0,.6)] navbar-img">
        <div className="flex flex-col items-center h-full text-white  justify-center">
          <p className="mb-4 text-gray-100">{sectionTitle}</p>
          <h1 className="text-base lg:text-6xl font-bold text-center text-gray-100 lg:w-[750px]">
            {title}
          </h1>
          {/* <div className="">
            <button className="btn bg-middle mr-4 mt-5 text-white">
              Be a volunteer
            </button>
            <button className="btn btn-outline  text-white">
              Post for volunteer
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NavbarBg;
