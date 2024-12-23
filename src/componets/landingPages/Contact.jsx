import React from "react";
import { companyDetails } from "../../constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Contact = () => {
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
    <section
      id="contact"
      className="py-[5rem] text-white bg-gradient-to-r from-primarygradient/50 to-primary/50"
    >
      <div className="wrapper">
        <div className="h-full grid md:grid-cols-2 gap-10 py-10">
          <div data-aos="fade-right" className="flex flex-col gap-4">
            <h2 className="heading-2">Get In Touch With Us!</h2>
            <p className="desc">
              Let <span className="font-semibold">VIRONIX INNOVATIONS</span> be
              the catalyst for your digital transformation. Together, we can
              build solutions that are as dynamic as your vision, helping your
              business reach new heights.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            data-aos="fade-left"
            className="flex flex-col gap-4 md:px-[1rem] text-white "
          >
            <div className="">
              <input
                className="w-full bg-transparent placeholder:text-slate-100 text-white outline-none border rounded-sm font-light border-white/40 px-2 py-3"
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
              <small className="error-message">{errors.name?.message}</small>
            </div>
            <div className="">
              <input
                className="w-full bg-transparent placeholder:text-slate-100 outline-none border rounded-sm font-light border-white/40 px-2 py-3"
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
              <small className="error-message">{errors.email?.message}</small>
            </div>
            <div className="flex flex-col gap-1">
              <input
                className="w-full bg-transparent placeholder:text-slate-100 outline-none border rounded-sm font-light border-white/40 px-2 py-3"
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
              <small className="error-message">{errors.phone?.message}</small>
            </div>
            <div className="">
              <textarea
                className="w-full bg-transparent placeholder:text-slate-100 outline-none border rounded-sm font-light border-white/40 px-2 py-3"
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
              <small className="error-message">{errors.message?.message}</small>
            </div>
            <button
              disabled={isSubmitting}
              className="primary-btn"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
