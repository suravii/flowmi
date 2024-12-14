import Container from "../../Components/Container";
import download from "../../assets/images/download.png";
import qr from "../../assets/images/qr1.png";
import ios from "../../assets/images/ios1.svg";
import android from "../../assets/images/androidd.svg";

const DownloadSection = () => {
  return (
    <section id="download" className="px-6 lg:px-16 py-12 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          {/* max-w-lg  */}
          <div className="flex flex-col items-start max-lg:items-center text-left ">
            <div className="">
              <h2 className=" text-gray-900">
                <span className="text-6xl font-bold">Download</span> <br />
                <span className="text-5xl font-medium">Our App</span>
              </h2>

              <p className="text-gray-500 mt-4 text-lg">
                Download now & avail our service through the app
              </p>

              {/* Buttons and QR Code Row */}
              <div className="flex gap-6 mt-6 items-center">
                {/* Left Side - Android and iOS Images */}
                <div className="flex flex-col gap-4">
                  <img src={ios} alt="iOS" className="w-46 h-auto" />
                  <img src={android} alt="Android" className="w-46 h-auto" />
                </div>

                {/* Right Side - QR Code */}
                <div className="flex items-center">
                  <img src={qr} alt="QR Code" className="w-30 h-30" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative flex items-center justify-center">
            <img
              src={download}
              alt="Download App"
              className="relative w-66-auto rounded-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DownloadSection;
