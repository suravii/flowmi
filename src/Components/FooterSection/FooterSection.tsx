import Container from "../Container";

const FooterSection = () => {
  return (
    <footer className="bg-[#15165A] text-white py-4">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4 sm:gap-0">
          {/* Copyright Text */}
          <div className="max-sm:text-xs text-sm ">Copyright © Flowmi AI</div>

          {/* Navigation Links */}
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-4 text-sm max-sm:text-xs">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#about" className="hover:underline">
              About Us
            </a>
            <a href="#features" className="hover:underline">
              Features
            </a>
            <a href="#download" className="hover:underline">
              Download
            </a>
            <a href="#faq" className="hover:underline">
              FAQ
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default FooterSection;
