import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const SailingSoon = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center py-10 flex-grow">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col h-full items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-7xl font-bold text-white py-12">
            {t("sailingSoon.heading")}
          </h2>
          <h5 className="text-2xl font-bold text-white">
            <Link to="https://www.ebhar.gov.sa" target="_blank">
              {t("sailingSoon.webLink")}
            </Link>
          </h5>
          <p className="mt-4 text-lg leading-relaxed text-white">
            {t("sailingSoon.description")}
          </p>
          <p className="mt-1 text-lg leading-relaxed text-white">
            {t("sailingSoon.description_below")}
          </p>
          <h5 className="mt-5 text-2xl font-bold text-white">
            <Link
              to="mailto:info@ebhar@gov.sa"
              className="no-underline font-bold"
              style={{ color: "#025584" }}
            >
              {t("sailingSoon.email")}
            </Link>
          </h5>
        </div>
      </div>
    </section>
  );
};
