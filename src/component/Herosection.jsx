import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";
import { RiCloseLargeFill } from "react-icons/ri";

const Herosection = () => {
  const [mobilenav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobilenav);
  };
  return (
    <section className="relative h-screen bg-cover bg-center bg-[url('assets/background.jpg')] text-white">
      <div className=" z-0 absolute inset-0 bg-black bg-opacity-70"></div>

      <nav className="absolute top-0 z-20 lg:flex w-full justify-between items-center px-10 py-8 hidden ">
        <div>
          <img
            src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/06/logo.svg"
            alt="Logo"
          />
        </div>
        <div>
          <ul className="flex text-lg font-semibold gap-9 transition-all duration-200">
            <Link to="about" smooth={true} duration={500}>
              <li className="text-gray-400 hover:text-white">About</li>
            </Link>

            <li className="text-gray-400 hover:text-white">Portfolio</li>
            <li className="text-gray-400 hover:text-white">Services</li>
            <li className="text-gray-400 hover:text-white">Testimonials</li>
          </ul>
        </div>
        <div>
          <button className="ring-1 ring-white px-8 py-3 font-semibold hover:bg-white hover:text-blue-700 transition-all duration-200">
            Let's connect
          </button>
        </div>
      </nav>

      <nav className="absolute top-0 z-20 flex w-full justify-between items-center px-5 py-4 lg:selection:hidden lg:hidden">
        <img
          src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/06/logo.svg"
          alt="Logo"
        />

        <div
          onClick={toggleMobileNav}
          className="p-3 z-[600] border-2 border-blue-800 rounded-md text-xl text-blue-800"
        >
          {mobilenav ? <RiCloseLargeFill /> : <RxHamburgerMenu />}
        </div>
      </nav>

      <section className="relative z-10 text-white flex flex-col items-center justify-center h-full">
        <div className="text-center w-[60%]">
          <h1 className="text-6xl font-bold leading-snug">
            Freelance web developer based in Lagos
          </h1>
          <p className="text-lg mt-4">
            Expert development services by NYC-based freelancer for your website
            needs.
          </p>
          <div className="mt-10 space-x-3">
            <button className="px-10 py-4 bg-purple-600 hover:text-purple-600 hover:bg-white font-semibold">
              Let's connect
            </button>
            <button className="ring-1 px-10 py-4 font-semibold hover:text-purple-600 hover:bg-white">
              Check my work
            </button>
          </div>
        </div>
      </section>

      {mobilenav && (
        <sidebar className=" z-[500] top-16 absolute h-fit w-full lg:hidden flex flex-col bg-[#1b1448] ">
          <div>
            <ul className="flex flex-col text-lg font-semibold  transition-all duration-200">
              <li className="text-gray-400 hover:text-white border-b-2 border-white px-6 py-2">
                About
              </li>

              <li className="text-gray-400 hover:text-white  border-b-2 border-white px-6 py-2">
                Portfolio
              </li>
              <li className="text-gray-400 hover:text-white  border-b-2 border-white px-6 py-2">
                Services
              </li>
              <li className="text-gray-400 hover:text-white  border-b-2 border-white px-6 py-2">
                Testimonials
              </li>
            </ul>
          </div>
        </sidebar>
      )}
    </section>
  );
};

export default Herosection;
