import  { useState } from "react";
import flowmi from "../../assets/images/flowmi.svg";
import Container from "../../Components/Container";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#3A49F9] to-[#9C2CF3]">
      <Container>
        <div className="flex justify-between items-center py-4 max-sm:px-4 max-lg:px-4">
          {/* Logo */}
          <div className="py-0">
            <img src={flowmi} className="w-20 h-20 max-sm:w-12 max-sm:h-12" alt="Flowmi Logo" />
          </div>

          {/* Hamburger Icon for Small Screens */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              className="bg-white w-24 h-7 text-sm text-[#1E209A] px-6 rounded-[10px] font-medium shadow-md hover:bg-gray-100"
            >
              Register
            </button>
            <button onClick={toggleMenu} className="text-white text-2xl">
              ☰
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="hidden lg:flex justify-between items-center text-xl text-white gap-6">
            <li><a href="#home" className="anav font-medium">Home</a></li>
            <li><a href="#about" className="anav font-medium">About Us</a></li>
            <li><a href="#features" className="anav font-medium">Features</a></li>
            <li><a href="#download" className="anav font-medium">Download</a></li>
            <li><a href="#faq" className="anav font-medium">FAQ</a></li>
          </ul>

          {/* Register Button for Large Screens */}
          <button className="hidden lg:block bg-white w-30 h-9 text-lg text-[#1E209A] px-6  rounded-[10px] font-medium shadow-md  hover:bg-white  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Register
          </button>
        </div>

        {/* Overlay Menu for Small Screens */}
        {menuOpen && (
          <div className="fixed top-0 right-0 w-2/3 h-full bg-gradient-to-r from-[#3A49F9] to-[#9C2CF3] text-white flex flex-col items-center justify-center z-50">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-3xl"
            >
              &times;
            </button>
            <ul className="flex flex-col gap-6 text-lg">
              <li><a href="#home" className="hover:underline" onClick={toggleMenu}>Home</a></li>
              <li><a href="#about" className="hover:underline" onClick={toggleMenu}>About Us</a></li>
              <li><a href="#features" className="hover:underline" onClick={toggleMenu}>Features</a></li>
              <li><a href="#download" className="hover:underline" onClick={toggleMenu}>Download</a></li>
              <li><a href="#faq" className="hover:underline" onClick={toggleMenu}>FAQ</a></li>
            </ul>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
