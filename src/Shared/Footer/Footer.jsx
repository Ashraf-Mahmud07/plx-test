import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="dark:text-white mt-6 text-white bg-black ">
      <div className="container px-5 py-5  mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <div className="py-5 text-purple-500 font-extrabold text-4xl">
              <span className="text-orange-600">Shop</span>Pable
            </div>
          </a>
          <p className="mt-2 text-sm text-slate-200">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20  md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-slate-200 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-slate-200 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-slate-200 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto  px-5 flex flex-wrap flex-col sm:flex-row">
          <span className="inline-flex sm:ml-auto sm:mt-0  justify-center sm:justify-start">
            <a className="text-gray-300">
              <FaFacebookF></FaFacebookF>
            </a>
            <a className="ml-3 text-gray-300">
              <FaTwitter></FaTwitter>
            </a>
            <a className="ml-3 text-gray-300">
              <FaInstagram></FaInstagram>
            </a>
            <a className="ml-3 text-gray-300">
              <FaYoutube />
            </a>
          </span>
        </div>
      </div>
      <div className="footer footer-center font-bold p-4">
        <p>Copyright © 2023 - All right reserved by HealthCare Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
