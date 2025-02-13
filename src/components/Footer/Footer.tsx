import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const year = () => new Date().getFullYear;

  return (
    <footer className="bg-black   px-4 md:px-8 lg:px-16 p-2 sm:p-0 mx-auto text-gray-300 py-10 ">
      <div className=" container  mx-auto py-12 grid md:grid-cols-5 gap-12">
        <div>
          <h2 className="text-orange-500 md:text-5xl font-bold">ShaRlix</h2>
          <p className="mt-4">Subscribe to Our Newsletter:</p>
          <p className="text-sm text-gray-400">
            Receive Updates on New Arrivals and Special Promotions!
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email here"
              className="px-4 w-full py-2 rounded-l bg-gray-800 text-white outline-none"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r hover:bg-orange-600">
              Submit
            </button>
          </div>
          <div className="flex space-x-4 mt-4">
            <FaTwitter className="text-xl cursor-pointer hover:text-orange-500" />
            <FaFacebookF className="text-xl cursor-pointer hover:text-orange-500" />
            <FaLinkedinIn className="text-xl cursor-pointer hover:text-orange-500" />
            <FaInstagram className="text-xl cursor-pointer hover:text-orange-500" />
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold">Categories</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                to="/categories/fashion"
                className="hover-underline text-sm"
              >
                Fashion
              </Link>
            </li>
            <li>
              <Link
                to="/categories/jewelry"
                className="hover-underline text-sm"
              >
                Jewelry
              </Link>
            </li>
            <li>
              <Link to="/categories/sports" className="hover-underline text-sm">
                Sports
              </Link>
            </li>
            <li>
              <Link
                to="/categories/electronics"
                className="hover-underline text-sm"
              >
                Electronics
              </Link>
            </li>
            <li>
              <Link to="/categories/indoor" className="hover-underline text-sm">
                Indoor
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold">Shopping</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/shopping/payments" className="hover-underline text-sm">
                Payments
              </Link>
            </li>
            <li>
              <Link
                to="/shopping/delivery-options"
                className="hover-underline text-sm"
              >
                Delivery options
              </Link>
            </li>
            <li>
              <Link
                to="/shopping/buyer-protection"
                className="hover-underline text-sm"
              >
                Buyer protection
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold">Customer Care</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                to="/customer-care/help-center"
                className="hover-underline text-sm"
              >
                Help center
              </Link>
            </li>
            <li>
              <Link
                to="/customer-care/terms"
                className="hover-underline text-sm"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/customer-care/privacy-policy"
                className="hover-underline text-sm"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                to="/customer-care/returns"
                className="hover-underline text-sm"
              >
                Returns & refund
              </Link>
            </li>
            <li>
              <Link
                to="/customer-care/survey"
                className="hover-underline text-sm"
              >
                Survey & feedback
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold">Pages</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/about" className="hover-underline text-sm">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover-underline text-sm">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover-underline text-sm">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover-underline text-sm">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover-underline text-sm">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center container mx-auto py-12 text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} ShaRlix Inc. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
