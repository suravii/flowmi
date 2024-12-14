import Container from "../../Components/Container";

const AboutSection = () => {
  return (
    <section>
      <Container>
        <section id="about" className="pt-16 pb-10 bg-white  border-b-2 border-b-[#3A49F9]">
          <div className="container mx-auto px-4 md:px-16 text-center">
            {/* Section Heading */}
            <p className="text-3xl font-semibold max-sm:text-2xl md:text-4xl text-blue-700 mb-8">
              What is FLOWMI-AI?
            </p>
            
            {/* Grid for Cards */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 xl:px-28 ">
              {/* Left Card */}
              <div className="flex flex-col justify-center items-center px-6 py-10 text-center rounded-lg shadow-custom border-[1px] border-[#3A49F9] min-h-[250px]">
                <p className="text-gray-500 text-md sm:text-md font-medium">
                  Your smart traffic commute assistant, designed to save you time and
                  transform your daily journey. Predicts traffic, provides real-time
                  updates, and optimizes your daily commute for faster, safer, and
                  efficient journeys.
                </p>
              </div>

              {/* Right Card */}
              <div className="flex flex-col justify-center items-center px-6 py-10 text-center rounded-lg shadow-custom border-[1px] border-[#3A49F9] min-h-[250px]">
                <p className="text-gray-500 text-md sm:text-md font-medium">
                  FLOWMI is an intelligent app that helps you to navigate the traffic with
                  real-time updates, route optimization, and personalized scheduling. It
                  also ensures you spend less time on the road and more time on what matters
                  most.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8 md:mt-14">
              <button className="px-6 md:px-8 py-2 text-blue-700 text-sm sm:text-md rounded-[24px] font-medium shadow border-[2px] border-[#3A49F9] hover:bg-blue-800 hover:text-white">
                What we do
              </button>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default AboutSection;
