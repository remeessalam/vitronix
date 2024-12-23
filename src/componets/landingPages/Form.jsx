import React, { useContext } from "react";

import { companyDetails } from "../../constant";
// import line from "../../assets/images/line.png";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { SpinnerContext } from "../SpinnerContext";
import { useNavigate } from "react-router-dom";
//  "../../assets/images/line.png";

const Form = () => {
  //   const { setSpinner } = useContext(SpinnerContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });
  const navigate = useNavigate();

  // handle form submit click
  const handleFormSubmit = async (values) => {
    // setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Subject: " + values.subject + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: "You have a new message from NEXTGENAI",
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Email sent successfully");
        reset();
        navigate("/thank-you");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => "");

    // setSpinner(false));
  };
  return (
    <div className="mt-20 mb-32">
      <section className="wrapper  text-white">
        <div
          data-aos="fade-up"
          className="max-w-5xl mx-auto -mb-[8rem] bg-primary p-8 shadow-large shadow-black/10 rounded-lg relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-5">
            <div className="flex flex-col gap-3">
              <div data-aos="fade-up" className="flex items-center gap-3">
                {/* <img src={line} alt="line" className="w-[3rem]" /> */}
                <h6 className="font-medium text-main">Contact Us</h6>
              </div>
              <h2 data-aos="fade-up" className="heading-2 capitalize">
                Let’s Collaborate to Innovate
              </h2>
              <p data-aos="fade-up" className="max-w-[35rem] lg:max-w-max">
                At Vitronix, we’re committed to delivering technology solutions
                that drive business transformation. Contact us today to explore
                how our expertise can support your business goals.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              data-aos="fade-up"
              className="flex flex-col gap-1"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm ml-1">
                    Name
                  </label>
                  <input
                    className="border outline-none border-main placeholder-slate-100 bg-black/5 rounded-sm p-2"
                    type="text"
                    placeholder="Full Name"
                    {...register("name", {
                      required: "Full name is required",
                      validate: (val) => {
                        if (val.trim() !== "") {
                          return true;
                        } else {
                          return "Full name is required";
                        }
                      },
                    })}
                  />
                  <small className="error-message">
                    {errors.name?.message}
                  </small>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm ml-1">
                    Email
                  </label>
                  <input
                    className="border outline-none border-main placeholder-slate-100 bg-black/5 rounded-sm p-2"
                    type="email"
                    placeholder="Email Address"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Entered email is invalid",
                      },
                    })}
                  />
                  <small className="error-message">
                    {errors.email?.message}
                  </small>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm ml-1">
                    Phone
                  </label>
                  <input
                    className="border outline-none border-main placeholder-slate-100 bg-black/5 rounded-sm p-2"
                    type="tel"
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[6-9]\d{9}$/i,
                        message: "Entered phone number is invalid",
                      },
                    })}
                  />
                  <small className="error-message">
                    {errors.phone?.message}
                  </small>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="border outline-none border-main placeholder-slate-100 bg-black/5 rounded-sm p-2"
                    placeholder="Enter Subject"
                    {...register("subject", {
                      required: "Subject is required",
                      validate: (val) => {
                        if (val.trim() !== "") {
                          return true;
                        } else {
                          return "Subject is required";
                        }
                      },
                    })}
                  />
                  <small className="error-message">
                    {errors.subject?.message}
                  </small>
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm ml-1">
                  Message
                </label>
                <textarea
                  className="border outline-none border-main placeholder-slate-100 bg-black/5 rounded-sm p-2"
                  type="text"
                  placeholder="Enter Message"
                  rows="4"
                  {...register("message", {
                    required: "Message is required",
                    validate: (val) => {
                      if (val.trim() !== "") {
                        return true;
                      } else {
                        return "Message is required";
                      }
                    },
                  })}
                />
                <small className="error-message">
                  {errors.message?.message}
                </small>
              </div>
              <button
                disabled={isSubmitting}
                // type="submit"
                className="primary-btn-black mt-3 border border-gray-50 py-3 hover:bg-white hover:border-primary bg-black hover:text-black transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
