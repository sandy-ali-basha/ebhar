import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// assets
import Linkedin from "../../assets/images/linkedin.svg";
import Instagram from "../../assets/images/instagram.svg";
import Twitter from "../../assets/images/twitter.svg";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-white font-bold">{t("Footer.rights")}</p>

          <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
            <li>
              <Link
                to="/"
                title=""
                className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent w-7 h-7 cursor-pointer"
              >
                <img className="" src={Linkedin} alt="" />
              </Link>
            </li>

            <li>
              <Link
                to="/"
                title=""
                className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent w-7 h-7 cursor-pointer"
              >
                <img className="" src={Instagram} alt="" />
              </Link>
            </li>

            <li>
              <Link
                to="/"
                title=""
                className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent w-7 h-7 cursor-pointer"
              >
                <img className="" src={Twitter} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Footer;
