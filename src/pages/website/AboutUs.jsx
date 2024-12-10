import React from "react";
import {
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  whyChooseUsContent,
} from "../../constant";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import OurServices from "../../componets/website/OurServices";
import Testimonials from "../../componets/common/Testimonials";

const AboutUs = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className="h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          src={aboutUsBanner}
          className="object-cover object-[100%_35%] h-full w-full"
          alt=""
        />
        <h2 className="font-raleway text-[2.18rem] md:text-7xl font-bold leading-tight text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[10%] text-center">
          About us
        </h2>
      </div>
      <div className="py-[5rem] text-white text-center">
        <div className="wrapper flex flex-col items-center gap-5 mb-[5rem]">
          <div data-aos="fade-up" className="gradient-rounded-text-box">
            About Us
          </div>
          <h2 data-aos="fade-up" className="heading-2">
            Empowering Your Digital Transformation
          </h2>
          <p data-aos="fade-up" className="desc max-w-[50rem]">
            At VIRONIX INNOVATIONS, we specialize in leveraging cutting-edge
            technology to deliver innovative solutions that drive business
            success. Our expert team is dedicated to creating digital
            experiences that make an impact and help businesses thrive in a
            constantly evolving world.
          </p>
          <div className="pt-[3rem]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Innovating for a Smarter Future
                  </h6>
                  <p className="desc mt-2">
                    At VIRONIX INNOVATIONS, innovation is at the heart of
                    everything we do. We are constantly exploring emerging
                    technologies to craft smarter, future-ready solutions that
                    go beyond solving today's problems. Our goal is to help
                    businesses anticipate future needs and stay ahead of the
                    competition.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg1}
                    alt="Innovating for a Smarter Future"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg2}
                    alt="Tailored to Your Needs"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Tailored to Your Needs
                  </h6>
                  <p className="desc mt-2">
                    At VIRONIX INNOVATIONS, we understand that every business is
                    unique. We offer tailored solutions that cater to your
                    specific needs and goals. From startups to large
                    enterprises, we collaborate with our clients to craft
                    personalized strategies and create long-term partnerships
                    grounded in trust and mutual success.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-10 sm:gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Excellence in Every Solution
                  </h6>
                  <p className="desc mt-2">
                    Our commitment to excellence ensures that every solution we
                    provide meets the highest standards of quality, reliability,
                    and performance. We take pride in delivering products that
                    are not only robust and secure but also scalable and
                    adaptable to your growing needs.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg3}
                    alt="Excellence in Every Solution"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg4}
                    alt="Purposeful Innovation"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Purposeful Innovation
                  </h6>
                  <p className="desc mt-2">
                    Technology with purpose can drive transformation. At VIRONIX
                    INNOVATIONS, we use technology not just for the sake of it,
                    but to create tangible value—whether it's streamlining
                    operations, enhancing customer experiences, or driving
                    sustainable growth. Our solutions are purpose-driven to
                    ensure maximum impact.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Full-Circle Support
                  </h6>
                  <p className="desc mt-2">
                    From idea conception to deployment and ongoing maintenance,
                    we provide end-to-end solutions to support every stage of
                    your digital journey. Our goal is to be your trusted
                    partner, ensuring your business remains adaptable and
                    continues to evolve with emerging technologies.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg5}
                    alt="Full-Circle Support"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <UnlockEfficiency />
        <div className="wrapper mt-[5rem]">
          <h2 data-aos="fade-up" className="heading-2">
            Why Choose VIRONIX INNOVATIONS?
          </h2>
          <ul className="mt-[2rem] flex flex-col gap-3 list-disc list-outside text-start">
            {whyChooseUsContent.map((item) => (
              <li data-aos="fade-up" key={item.id} className="text-primary">
                <span className="font-raleway font-bold">{item.title}:</span>{" "}
                <span className="desc text-white ml-1">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <OurServices length={3} />
      <Testimonials />
    </>
  );
};

export default AboutUs;
