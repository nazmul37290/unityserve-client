// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import banner from "../assets/banner5.jpg";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import "../css/testimonialSlider.css";
import { FaQuoteRight } from "react-icons/fa6";
const TestimonialSlider = () => {
  return (
    <div className="w-[300px] lg:w-[800px]">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper swiper2"
      >
        <SwiperSlide className="swiper-slide2  rounded-3xl relative">
          <p className="italic text-lg text-[#e7e7e7]">
            Unity Serve has been an incredible platform for connecting
            volunteers with meaningful opportunities.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <div className="h-14 w-14 rounded-full">
              <img src={banner} className="h-full w-full rounded-full" alt="" />
            </div>
            <div>
              <p className="font-bold  text-start">Emma Johnson</p>
              <p className=" ">Volunteer Coordinator</p>
              <span className="text-5xl   absolute right-10">
                <FaQuoteRight></FaQuoteRight>
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2  rounded-3xl relative">
          <p className="italic text-lg text-[#e7e7e7]">
            Unity Serve has been an incredible platform for connecting
            volunteers with meaningful opportunities.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <div className="h-14 w-14 rounded-full">
              <img src={banner} className="h-full w-full rounded-full" alt="" />
            </div>
            <div>
              <p className="font-bold  text-start">Emma Johnson</p>
              <p className=" ">Volunteer Coordinator</p>
              <span className="text-5xl   absolute right-10">
                <FaQuoteRight></FaQuoteRight>
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2  rounded-3xl relative">
          <p className="italic text-lg text-[#e7e7e7]">
            Unity Serve has been an incredible platform for connecting
            volunteers with meaningful opportunities.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <div className="h-14 w-14 rounded-full">
              <img src={banner} className="h-full w-full rounded-full" alt="" />
            </div>
            <div>
              <p className="font-bold  text-start">Emma Johnson</p>
              <p className=" ">Volunteer Coordinator</p>
              <span className="text-5xl   absolute right-10">
                <FaQuoteRight></FaQuoteRight>
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
