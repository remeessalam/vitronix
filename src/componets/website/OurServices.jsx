import React, { useState } from "react";
import { allServices } from "../../constant";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { IoMdClose } from "react-icons/io";

const OurServices = ({ length }) => {
  const [isOpen, setIsOpen] = useState(false);
  const services = allServices.slice(0, length || allServices.length);
  const [selectedService, setSelectedService] = useState(services[0]);

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  return (
    <div className="py-[5rem] bg-[#101010] text-white">
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col text-center gap-5 items-center"
      >
        <div data-aos="fade-up" className="gradient-rounded-text-box mb-2">
          Our Services
        </div>
        <h2 data-aos="fade-up" className="heading-2 max-w-[50rem]">
          Advanced and Highly Reliable Performance
        </h2>
        <p data-aos="fade-up" className="desc max-w-[50rem]">
          Our success is our success and together we help our society to become
          a better place to live and work.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-3">
          {services.map((service) => (
            <div
              onClick={() => handleSelectServiceToShowDetail(service)}
              data-aos="fade-up"
              key={service.id}
              className="rounded-lg p-[1px] bg-gradient-to-r from-primarygradient to-primary cursor-pointer"
            >
              <div className="rounded-lg bg-[#101010] hover:bg-black/70 transition-all duration-300 p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                <div className="flex flex-col gap-3">
                  <h5 className="font-semibold text-xl font-raleway">
                    {service.title}
                  </h5>
                  <p className="desc text-white/80">{service.desc}</p>
                </div>
                <button
                  onClick={() => handleSelectServiceToShowDetail(service)}
                  className="desc mt-1 flex items-center gap-3 hover:text-primary transition-all duration-300"
                >
                  Learn More <PiCaretDoubleRightBold />
                </button>
              </div>
            </div>
          ))}
        </div>
        {length && (
          <Link to="/services" className="primary-btn mt-6">
            All Services
          </Link>
        )}
      </div>

      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="top"
        className="p-4 z-10 w-screen"
        lockBackgroundScroll
      >
        <div className="mb-3 flex items-center justify-end pr-[.7rem] py-[.4rem]">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-[2.2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col gap-6 text-white pb-[2rem]">
          {/* Title */}
          <h1 className="heading-2 text-2xl md:text-4xl">
            {selectedService.title}
          </h1>

          {/* Description */}
          <p className="desc whitespace-pre-line text-sm md:text-base">
            {selectedService.detailContent}
          </p>

          {/* Service Highlights (if available) */}
          {selectedService.serviceHighlights &&
            selectedService.serviceHighlights.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Service Highlights
                </h2>
                <ul className="list-disc pl-5">
                  {selectedService.serviceHighlights.map((highlight, index) => (
                    <li key={index} className="text-sm md:text-base">
                      {highlight.title}: {highlight.desc}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {/* Why Choose Us (if available) */}
          {selectedService.whyChooseUs &&
            selectedService.whyChooseUs.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Why Choose Us
                </h2>
                <ul className="list-disc pl-5">
                  {selectedService.whyChooseUs.map((reason, index) => (
                    <li key={index} className="text-sm md:text-base">
                      {reason.title}: {reason.desc}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {/* Call to Action Buttons */}
          <div className="mt-8 flex gap-4">
            {selectedService.callToAction && (
              <Link to="/contact-us" className="primary-btn">
                {" "}
                {selectedService.callToAction}
              </Link>
            )}
            {selectedService.additionalCTA && (
              <Link to="/contact-us" className="secondary-btn">
                {selectedService.additionalCTA}
              </Link>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default OurServices;
