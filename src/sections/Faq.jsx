import soloVolunteer from "../assets/solovolunteer.jpg";

const Faq = () => {
  return (
    <div>
      <div className="bg-[#cdcccc] mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3  items-center gap-4">
          <div>
            <div className="hero ">
              <div className="hero-content ">
                <div className="max-w-md">
                  <p className="text-center">
                    _______Question and Answer________
                  </p>
                  <h1 className="text-4xl mt-4 font-bold">
                    Frequently Asked Questions
                  </h1>
                  <p className="py-6">
                    youll find answers to common questions about posting
                    volunteer opportunities, finding the right match for your
                    skills and interests, and making the most of your volunteer
                    experience.{" "}
                  </p>
                  <button className="btn bg-light rounded-full px-10 text-base-100">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <img src={soloVolunteer} alt="" />
            </div>
          </div>
          <div className="space-y-5 lg:relative right-[50px]">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-base bg-light text-base-100 font-medium">
                How can I update a volunteer post I ve already submitted?
              </div>
              <div className="collapse-content">
                <p>
                  To update your volunteer post, simply log in to your account
                  and navigate to the My Posts section. From there, you ll be
                  able to find your post and select the option to edit it. Make
                  any necessary changes, and dont forget to save your updates
                  before exiting.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-base bg-light text-base-100 font-medium">
                Can I delete a volunteer post if its no longer relevant?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, you have the ability to delete your volunteer post at any
                  time. Log in to your account, go to the My Posts section,
                  locate the post you wish to remove, and select the option to
                  delete it.{" "}
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-base bg-light text-base-100 font-medium">
                I accidentally deleted my volunteer post. Is there any way to
                recover it?
              </div>
              <div className="collapse-content">
                <p>
                  Unfortunately, once a volunteer post is deleted, it cannot be
                  recovered. We recommend double-checking before confirming the
                  deletion to avoid accidental removal of important posts.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-base bg-light text-base-100 font-medium">
                Is there a limit to how many times I can update or delete my
                volunteer posts?
              </div>
              <div className="collapse-content">
                <p>
                  No, theres no limit to the number of times you can update or
                  delete your volunteer posts. We want to ensure that you have
                  full control over your postings and can make adjustments as
                  needed to best represent your volunteer opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
