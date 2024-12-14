import React from "react";
import calender from "../../assets/images/calendersvg.svg";
import bell from "../../assets/images/bellsvg.svg";
import cloud from "../../assets/images/cloudsvg.svg";
import magnify from "../../assets/images/magnifysvg.svg";
import routes from "../../assets/images/routesvg.svg";
import camera from "../../assets/images/camerasvg.svg";
import flowmi from "../../assets/images/feature.png";
import Container from "../../Components/Container";

const Features = () => {
  return (
    <div id="features" className="bg-gray-50 py-12 ">
      <Container>
        <h1 className="text-5xl font-medium text-[#1E209A] text-center mb-12">
          Salient Features<br/> of Flowmi
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:pr-24">
          {/* Left Section */}
          <div className="flex flex-col gap-20 max-lg:gap-8 lg:text-right lg:items-end text-center items-center">
            <FeatureItem
              icon={calender}
              title="Set schedule according to traffic"
              align="right"
            />
            <FeatureItem
              icon={bell}
              title="Notify user about the traffic"
              align="right"
            />
            <FeatureItem
              icon={cloud}
              title="Provides weather forecasts along your commute."
              align="right"
            />
          </div>

          {/* Center Section */}
          <div className="flex-shrink-0">
            <img
              src={flowmi}
              alt="Flowmi App"
              className="w-[320px] md:w-[400px] mx-auto px-6 drop-shadow-xl"
            />
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-20 max-lg:gap-8 lg:text-left lg:items-start text-center items-center">
            <FeatureItem
              icon={magnify}
              title="Provide route traffic information"
              align="left"
            />
            <FeatureItem
              icon={camera}
              title="See live road condition of road."
              align="left"
            />
            <FeatureItem
              icon={routes}
              title="Provide alternative route"
              align="left"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

type FeatureItemProps = {
  icon: string;
  title: string;
  align: "left" | "right";
};

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, align }) => (
  <div
    className={`flex flex-col items-center lg:items-${
      align === "left" ? "start" : "end"
    } text-center lg:text-${align}`}
  >
    <div className="w-12 h-12 mb-2 flex justify-center items-center">
      <img src={icon} alt={title} className="w-12 h-12 text-blue-600 max-lg:w-8 max-lg:h-8" />
    </div>
    <p className="text-lg font-medium text-gray-700">{title}</p>
  </div>
);

export default Features;
