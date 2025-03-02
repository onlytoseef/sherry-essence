import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black px-4 md:px-8 lg:px-16 text-gray-300 py-10">
      <div className="container mx-auto py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center md:text-left">
        {/* Logo and Newsletter */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
          <h2 className="text-orange-500 text-3xl md:text-4xl font-bold">
            ShaRlix
          </h2>
          <p className="mt-3">Subscribe to Our Newsletter:</p>
          <p className="text-sm text-gray-400">
            Receive Updates on New Arrivals and Special Promotions!
          </p>
          <div className="mt-4 flex w-full max-w-xs">
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

        {/* Links Sections */}
        {[
          {
            title: "Categories",
            links: ["Fashion", "Jewelry", "Sports", "Electronics", "Indoor"],
          },
          {
            title: "Shopping",
            links: ["Payments", "Delivery options", "Buyer protection"],
          },
          {
            title: "Customer Care",
            links: [
              "Help center",
              "Terms & Conditions",
              "Privacy policy",
              "Returns & refund",
              "Survey & feedback",
            ],
          },
          {
            title: "Pages",
            links: ["About Us", "Shop", "Contact Us", "Services", "Blog"],
          },
        ].map((section) => (
          <div
            key={section.title}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-white font-semibold">{section.title}</h3>
            <ul className="mt-3 space-y-2">
              {section.links.map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item
                      .toLowerCase()
                      .replace(/ & /g, "-")
                      .replace(" ", "-")}`}
                    className="hover-underline text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} ShaRlix Inc. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
