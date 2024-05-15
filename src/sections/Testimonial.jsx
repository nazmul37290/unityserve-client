import soloVolunteer from "../assets/solo.jpg";
import TestimonialSlider from "../components/TestimonialSlider";
const Testimonial = () => {
  return (
    <div>
      <div className=" mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2   gap-4">
          <div className="h-[750px]">
            <img
              src={soloVolunteer}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div>
            <div className="hero ">
              <div className="hero-content ">
                <div className="max-w-md">
                  <p>___________Testimonials___________</p>
                  <h1 className="text-4xl mt-4 font-bold">
                    Voices of Impact: Testimonials from Our Community
                  </h1>
                  <p className="py-6">
                    Discover the stories of those who have made a difference
                    through volunteering. Hear firsthand accounts of the impact
                    they've had on communities, organizations, and lives..{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative right-[250px]">
              <TestimonialSlider></TestimonialSlider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
