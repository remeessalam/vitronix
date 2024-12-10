import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../componets/landingPages/Contact";
import aboutUsImg from "../../assets/images/landing-aboutus.png";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../constant";
import OurServices from "../../componets/website/OurServices";
import EndlessOpportunitiesSection from "../../componets/common/EndlessOpportunitiesSection";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";

const Home = () => {
  return (
    <>
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
        />
        <div className="bg-gradient-to-r to-black/50 from-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto"
          >
            <div className="rounded-text-box border-white/70 font-medium">
              Expert IT Support & Services
            </div>
            <h1 className="heading-1">
              Your Reliable Partner
              <br /> in Technology Innovation
            </h1>
            <p className="desc">
              We provide advanced IT solutions designed to address the specific
              needs of today’s businesses.
            </p>
            <Link to="/contact-us" className="primary-btn mt-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <section className="py-[5rem] bg-black text-white wrapper">
        <div
          data-aos="fade-right"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          About Us
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-right" className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7 text-center lg:text-start">
              <h2 className="heading-2">
                Empowering Businesses with Cutting-Edge Digital Solutions
              </h2>
              <p className="desc">
                At VIRONIX INNOVATIONS, we’re passionate about technology and
                creativity, delivering digital solutions that help businesses
                thrive in a rapidly changing landscape. Our expert team
                specializes in web solutions, mobile apps, AI-driven
                technologies, and cutting-edge innovations like machine
                learning, computer vision, chatbots, and augmented reality. We
                craft intuitive, high-performance mobile apps, design advanced
                machine learning models, and create AI-powered experiences that
                enhance engagement and streamline operations. Committed to
                turning bold ideas into reality, we empower businesses with
                creative, technology-driven solutions that exceed expectations
                and drive growth. Whether in web development, AI, or mobile
                apps, we’re your trusted partner in the digital age.
              </p>
            </div>
            <div className="flex gap-5 mt-4 justify-center lg:justify-start">
              <Link to="/contact-us" className="primary-btn">
                Contact Us
              </Link>
              <Link to="/services" className="secondary-btn">
                Our Services
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              src={aboutUsImg}
              className="object-contain max-h-[30rem]"
              alt=""
            />
          </div>
        </div>
      </section>
      <OurServices length={3} />
      <section className="py-[5rem] bg-black text-white">
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Who We Are
          </div>
          <h1 className="heading-2 bg-gradient-to-r from-primarygradient max-w-[50rem] mx-auto to-primary bg-clip-text text-transparent">
            Reliable IT Support for Your Business
          </h1>
          <p className="desc max-w-[50rem] mx-auto">
            At VIRONIX INNOVATIONS, we are fueled by a passion for technology
            and creativity. What started as a vision to transform businesses
            through digital innovation has grown into a trusted partnership for
            companies seeking to embrace the future. Our dedicated team of
            developers, designers, and strategists specializes in crafting
            high-quality, innovative web solutions tailored to meet the unique
            needs of each client. We believe in staying ahead of the curve,
            delivering cutting-edge solutions that drive success. With a
            customer-first approach, we work closely with you to understand your
            goals and bring them to life with exceptional results. Every project
            we take on reflects our commitment to excellence, with a focus on
            innovation, quality, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* <Faqs /> */}
      <WhyChooseUs />
      <UnlockEfficiency />
      <EndlessOpportunitiesSection />
      <Contact />
    </>
  );
};

export default Home;
