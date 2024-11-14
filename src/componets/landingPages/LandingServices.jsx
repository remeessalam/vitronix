import React from "react";
import { appDevelopmentServices, webDevelopmentServices } from "../../constant";

const LandingServices = ({ page }) => {
  const services =
    page === "web-development"
      ? webDevelopmentServices
      : appDevelopmentServices;
  return (
    <div id="services" className="flex justify-center relative">
      <div className="wrapper py-10 flex flex-col items-center gap-5 z-10 text-white">
        <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
          Our {page === "web-development" ? "Web" : "App"} Development Services
        </div>
        <h1 data-aos="fade-up" className="heading-2 text-center max-w-2xl">
          {page === "web-development" &&
            "Exceptional Web Development to Strengthen Your Digital Presence"}
          {page === "app-development" &&
            "Innovative App Development for Engaging Mobile Experiences"}
        </h1>
        <p data-aos="fade-up" className="text-center max-w-2xl desc">
          {page === "web-development" &&
            "Professional web development services tailored to create robust, responsive, and visually appealing websites that reflect your brand and drive growth."}
          {page === "app-development" &&
            "Advanced app development solutions focused on building secure, scalable, and intuitive mobile applications that connect with your audience and elevate your brand."}
        </p>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 py-[2rem] mx-auto max-w-6xl"
        >
          {services.map((item) => (
            <div
              key={item.id}
              className="shadow-2xl transition-all border-2 border-primary/40 bg-primary/15 hover:-translate-y-1 hover:bg-primary/25 duration-300 rounded-lg"
            >
              <div className="flex h-full flex-col gap-2 items-center text-center text-white p-5 rounded-lg">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-[6rem] grayscale-[65%]"
                />
                <h6 className="font-semibold text-2xl font-raleway">
                  {item.title}
                </h6>
                <p className="text-md text-white/70 desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingServices;
