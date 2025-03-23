"use client";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import AOS from "aos";
import "aos/dist/aos.css";
import { CircularProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    main: {
      main: "#5e3ad4",
    },
    success: {
      main: "#4CAF50",
    },
    error: {
      main: "#f44336",
    },
  },
});

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorialul = localFont({
  src: "../fonts/ppeditorialold-ultralightitalic.otf",
});

const SectionSeven = () => {
  // Form state management
  const [loading, setLoading] = useState(false);

  // Form validation state
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init();
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };

  // Validate form fields
  const validateForm = () => {
    // Email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Phone regex pattern (allowing various formats)
    const phonePattern =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    // Validate each field
    const nameError = formData.name.trim() === "";
    const emailError = !emailPattern.test(formData.email);
    const phoneError = !phonePattern.test(formData.phone);

    // Update error states
    setErrors({
      name: nameError,
      email: emailError,
      phone: phoneError,
    });

    // Return true if no errors
    return !(nameError || emailError || phoneError);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Create payload with default message if empty
      const submitData = {
        ...formData,
        message:
          formData.message.trim() === "" ? "No Message Sent" : formData.message,
      };

      // Send data to API endpoint
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (data.success) {
        // Clear form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  // Helper function for error text
  const getErrorText = (field) => {
    switch (field) {
      case "name":
        return errors.name ? "Name is required" : "";
      case "email":
        return errors.email ? "Please enter a valid email address" : "";
      case "phone":
        return errors.phone ? "Please enter a valid phone number" : "";
      default:
        return "";
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="w-full bg-main py-20 flex justify-center items-center flex-col xl:flex-row">
        <div className="w-fit mx-10 md:w-[80vw] xl:w-[50vw] xl:ml-28 flex flex-col justify-center items-start">
          <h1
            data-aos="fade-left"
            data-aos-duration="500"
            className={`${aspekta.className} text-5xl md:text-6xl xl:text-7xl font-light text-white`}
          >
            Fill this form
            <br />
            <span className={`${ppeditorialul.className} text-black`}>
              &
            </span>{" "}
            let's talk
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-duration="500"
            className={`${aspekta.className} text-lg md:text-xl font-medium text-white mt-6 md:mt-7 xl:mt-8 w-full`}
          >
            After you submit the form, someone from our Consultation team will
            reach out to you within 24 hours.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-fit flex flex-col justify-center items-center xl:mr-20"
        >
          <div className="w-fit h-fit flex m-1 justify-center items-center shadow-[5px_5px_0px_#1e1e1e] mt-5">
            <div className="w-box md:w-[80vw] md:min-w-[620px] xl:w-[666px] h-fit bg-white border-2 border-secondary flex justify-center items-center overflow-hidden">
              <div className="w-full m-2 flex flex-col">
                <label className="text-[#5e3ad4] text-sm font-medium mb-1">
                  Name*
                </label>
                <input
                  required
                  name="name"
                  placeholder="Enter your name"
                  className={`w-full border-b-2 border-[#5e3ad4] p-2 outline-none ${
                    errors.name ? "border-[#f44336]" : "border-[#5e3ad4]"
                  }`}
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && (
                  <p className="text-[#f44336] text-xs mt-1">
                    {getErrorText("name")}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-5">
            <div className="w-fit h-fit flex m-1 justify-center items-center shadow-[5px_5px_0px_#1e1e1e]">
              <div className="w-box md:w-[38.9vw] xl:w-80 h-fit bg-white border-2 border-secondary flex justify-center items-center overflow-hidden">
                <div className="w-full m-2 flex flex-col">
                  <label className="text-[#5e3ad4] text-sm font-medium mb-1">
                    Email*
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className={`w-full border-b-2 border-[#5e3ad4] p-2 outline-none ${
                      errors.email ? "border-[#f44336]" : "border-[#5e3ad4]"
                    }`}
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className="text-[#f44336] text-xs mt-1">
                      {getErrorText("email")}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="w-fit h-fit flex m-1 justify-center items-center shadow-[5px_5px_0px_#1e1e1e] md:ml-5 mt-5 md:mt-1">
              <div className="w-box md:w-[38.9vw] xl:w-80 h-fit bg-white border-2 border-secondary flex justify-center items-center overflow-hidden">
                <div className="w-full m-2 flex flex-col">
                  <label className="text-[#5e3ad4] text-sm font-medium mb-1">
                    Phone*
                  </label>
                  <input
                    required
                    name="phone"
                    placeholder="Enter your phone number"
                    className={`w-full border-b-2 p-2 outline-none ${
                      errors.phone ? "border-[#f44336]" : "border-[#5e3ad4]"
                    }`}
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && (
                    <p className="text-[#f44336] text-xs mt-1">
                      {getErrorText("phone")}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit h-fit flex m-1 justify-center items-center shadow-[5px_5px_0px_#1e1e1e] mt-5">
            <div className="w-box md:w-[80vw] md:min-w-[620px] xl:w-[666px] h-fit bg-white border-2 border-secondary flex justify-center items-center overflow-hidden">
              <div className="w-full m-2 flex flex-col">
                <label className="text-[#5e3ad4] text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Enter your message (optional)"
                  className="w-full border-b-2 p-2 outline-none resize-none border-[#5e3ad4]"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              disabled={loading}
              className="w-box md:w-[80vw] md:min-w-[620px] xl:w-[666px] h-16 bg-white border-2 border-secondary flex justify-center items-center mt-5 mx-1 shadow-[5px_5px_0px_#1e1e1e] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px]"
            >
              {loading ? <CircularProgress size={24} color="main" /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default SectionSeven;
