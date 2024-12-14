import phone from "../../assets/images/phone1.svg";

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-r  from-[#3A49F9] to-[#9C2CF3] text-white py-10 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between max-lg:px-4 ">
        {/* Left Side */}
        <div className="text-center md:text-left max-sm:px-4 animate-fade-right duration-3000">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-center ">
            Making Fastest City, Happiest People
          </h1>
          <p className="text-lg md:text-xl mb-8 text-center">
            We are dedicated to optimizing your daily <br /> commute.
          </p>
        </div>

        {/* Right Side */}
        <div className="mt-10 md:mt-0">
          <img
            src={phone}
            alt="FlowMiTop Preview"
            className="animate-fade-left"
            style={{
              animation: undefined, // Avoid conflicts
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
