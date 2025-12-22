"use client";

import React, { useState } from "react";
import PagesBanner from "@/Components/UI/PagesBanner";
import {
  ContactEmailTemplate,
  sendMail,
  ThankYouEmailTemplate,
} from "@/app/Mail";
import { siteEmail, siteName } from "@/utils/variable";
import toast from "react-hot-toast";
import Loader from "./UI/Loader";
import LocationInsights from "./LocationInsights";

const ContactPage = () => {
  const [fullName, setFullName] = useState("");
  const [mailId, setMailId] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendMail({
        sendTo: `${siteEmail}`,
        name: "Admin",
        subject: `Contact - ${siteName}`,
        message: await ContactEmailTemplate(fullName, mailId, phone, message, ""),
      });

      await sendMail({
        sendTo: mailId,
        name: fullName,
        subject: `Thank you for contacting ${siteName}`,
        message: await ThankYouEmailTemplate(fullName),
      });

      setLoading(false);
      toast.success("Message sent successfully!");
      setFullName("");
      setMailId("");
      setPhone("");
      setMessage("");
    } catch (error) {
      setLoading(false);
      console.error("Error sending emails:", error);
      toast.error("Failed to send message. Try again!");
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70">
          <Loader />
        </div>
      )}

      {/* Banner */}
      <PagesBanner
                bannerImg={"/blogImg/blog5.jpg"}
                bannerTitle={"Contact Us"}
            />

      {/* Contact section */}
      <section className="bg-[#2A6F7E] md:py-16 px-4 md:px-15 py-10">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: contact info */}
          <div className="text-white space-y-5">
            <h2 className="apollo-heading text-2xl md:text-[28px] mb-2">
              Get in Touch
            </h2>
            <p className="font-extralight text-[15px] leading-relaxed max-w-md">
              Reach out to Shantira Realty for project enquiries, site visits,
              or personalised guidance on finding your next home in Kerala.
            </p>

            <div className="space-y-4 pt-2">
              <div>
                <p className="text-xs uppercase tracking-wide text-white/70">
                  Phone
                </p>
                <p className="text-[15px] mt-1">
                  <a href="tel:+9112345678900" className="hover:underline">
                    +91 12345 678900
                  </a>
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-white/70">
                  Email
                </p>
                <p className="text-[15px] mt-1">
                  <a
                    href="mailto:info@shantirarealty.com"
                    className="hover:underline"
                  >
                    info@shantirarealty.com
                  </a>
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-white/70">
                  Address
                </p>
                <p className="text-[15px] mt-1 font-extralight max-w-sm">
                  Shantira Realty, Kochi, Kerala – 6820XX, India
                </p>
              </div>
            </div>
          </div>

          {/* Right: contact form (matches your enquiry style) */}
          <div className="bg-gradient-to-b bg-[#496f9a] to-transparent rounded-2xl px-6 md:px-8 py-8">
            <h3 className="text-center mb-1 apollo-heading text-white text-[22px]">
              Send us a Message
            </h3>
            <p className="text-center text-white font-extralight mb-6 text-[15px]">
              Fill in your details and our team will reach out shortly.
            </p>

            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label className="block text-[11px] text-gray-200 mb-1 pl-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full rounded-md bg-white text-gray-800 text-sm px-4 py-2.5 outline-none"
                  />

                  <label className="block text-[11px] text-gray-200 mb-1 pl-1">
                    Phone Number*
                  </label>
                  <div className="flex items-center rounded-md bg-white text-sm text-gray-800 px-4 py-2.5">
                    <span className="pr-3 border-r border-gray-300">+91</span>
                    <input
                      type="tel"
                      placeholder="0000 000 000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="flex-1 pl-3 outline-none bg-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-[11px] text-gray-200 mb-1 pl-1">
                    Mail ID*
                  </label>
                  <input
                    type="email"
                    placeholder="Mail ID*"
                    value={mailId}
                    onChange={(e) => setMailId(e.target.value)}
                    required
                    className="w-full rounded-md bg-white text-gray-800 text-sm px-4 py-2.5 outline-none"
                  />

                  <label className="block text-[11px] text-gray-200 mb-1 pl-1">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="How can we help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full rounded-md bg-white text-gray-800 text-sm px-4 py-2.5 outline-none resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-[43px] rounded-md cursor-pointer bg-[#CFA77F] hover:bg-[#c59b71] text-white font-light mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-[#2A6F7E] lg:py-16 pb-12 px-4 md:px-10">
            <div className="max-w-5xl mx-auto text-white">
                {/* Location heading */}
                <h2 className="text-center mb-3 apollo-heading text-white text-[28px]">Location</h2>

                {/* Map card */}
                <div className="bg-white rounded-2xl overflow-hidden mb-4">
                    <div className="aspect-[16/9] w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.6527531568695!2d76.32180447376386!3d9.962821473675977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08731c6c5486b9%3A0x17c349d386c66f25!2sSobha%20Atlantis!5e0!3m2!1sen!2sin!4v1764826420618!5m2!1sen!2sin"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full border-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default ContactPage;

