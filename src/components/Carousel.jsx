import { Swiper, SwiperSlide } from "swiper/react";
import bannerImg from "../assets/banner.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/app.css";
// import required modules
import { Autoplay, Parallax, Pagination, Navigation } from "swiper/modules";
const Carousel = () => {
  return (
    <div className=" h-[550px]">
      <>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          //   autoplay={{
          //     delay: 2500,
          //     disableOnInteraction: false,
          //   }}
          parallax={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              backgroundImage: `url(${bannerImg}) `,
            }}
            data-swiper-parallax="-23%"
          >
            <div className="h-[550px] bg-[rgb(0,0,0,.5)]"></div>
          </div>

          <SwiperSlide className="flex overflow-hidden h-[550px] justify-center  items-center">
            <div className="h-[550px] flex flex-col justify-center items-center">
              <div
                className="title uppercase text-3xl text-center md:text-6xl font-bold"
                data-swiper-parallax="-300"
              >
                Volunteer <span className="text-light">Opportunities</span>
              </div>
              <div
                className="subtitle text-xl mt-2 lg:mt-0 text-center w-full md:text-2xl"
                data-swiper-parallax="-200"
              >
                Find Your Passion, Make a Difference
              </div>
              <div
                className="text-center mt-2 md:mt-6 w-auto   md:h-auto lg:w-[1000px]"
                data-swiper-parallax="-100"
              >
                <p className="h-[240px] md:h-auto overflow-hidden">
                  Explore a variety of rewarding volunteer opportunities
                  tailored to your interests and availability. Make a difference
                  in your community while gaining valuable experience and
                  connections.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex overflow-hidden h-[550px] justify-center items-center">
            <div className="h-[550px] flex flex-col justify-center items-center">
              <div
                className="title uppercase text-3xl text-center md:text-6xl font-bold"
                data-swiper-parallax="-300"
              >
                Volunteer Management
                <span className="text-light">Made Easy</span>
              </div>
              <div
                className="subtitle text-xl mt-2 lg:mt-0 text-center w-full md:text-2xl"
                data-swiper-parallax="-200"
              >
                Streamline Your Organizations Efforts
              </div>
              <div
                className="text-center mt-2 md:mt-6 w-auto   md:h-auto lg:w-[1000px]"
                data-swiper-parallax="-100"
              >
                <p className="h-[240px] md:h-auto overflow-hidden">
                  Our platform simplifies volunteer management for organizations
                  of all sizes. Easily create, manage, and track volunteer
                  opportunities, schedules, and engagement, all in one place.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex overflow-hidden h-[550px] justify-center items-center">
            <div className="h-[550px] flex flex-col justify-center items-center">
              <div
                className="title uppercase text-3xl text-center md:text-6xl font-bold"
                data-swiper-parallax="-300"
              >
                Join Our Community of{" "}
                <span className="text-light">Changemakers</span>
              </div>
              <div
                className="subtitle text-xl mt-2 lg:mt-0 text-center w-full md:text-2xl"
                data-swiper-parallax="-200"
              >
                Together, We Can Achieve More
              </div>
              <div
                className="text-center mt-2 md:mt-6 w-auto   md:h-auto lg:w-[1000px]"
                data-swiper-parallax="-100"
              >
                <p className="h-[240px] md:h-auto overflow-hidden">
                  Join our vibrant community of passionate volunteers dedicated
                  to making a positive impact. Connect with like-minded
                  individuals, share experiences, and collaborate on meaningful
                  projects that drive change.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Carousel;
