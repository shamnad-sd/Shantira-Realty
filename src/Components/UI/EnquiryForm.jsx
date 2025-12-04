"use client";

import React, { useState } from "react";
import { ContactEmailTemplate, sendMail, ThankYouEmailTemplate } from "@/app/Mail";
import { siteEmail, siteName } from "@/utils/variable";
import toast from "react-hot-toast";
import Loader from "./Loader";

const EnquiryForm = () => {
  const [fullName, setFullName] = useState("");
  const [mailId, setMailId] = useState("");
  const [phone, setPhone] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (captcha.trim() !== "15") {
      toast.error("Captcha is incorrect.");
      return;
    }

    setLoading(true);

    try {
      await sendMail({
        sendTo: `${siteEmail}`,
        name: "Admin",
        subject: `Enquiry - ${siteName}`,
        message: await ContactEmailTemplate(fullName, mailId, phone, "", ""),
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
      setCaptcha("");
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

      <div className="bg-gradient-to-b from-[#496f9a] to-transparent">
        <div className="relative z-10 px-6 md:px-15">
          <section className="pb-10 px-4 md:px-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-center mb-1 apollo-heading text-white text-[28px]">
                Enquiry
              </h2>
              <p className="text-center text-white font-extralight mb-6 text-[19px]">
                Wish to get call back from our team? Fill your details.
              </p>

              <form onSubmit={handleSubmit} className="w-full space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <label className="block text-[11px] text-gray-200 mb-1 pl-4">
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

                    <label className="block text-[11px] text-gray-200 mb-1 pl-4">
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

                  <div className="space-y-4">
                    <label className="block text-[11px] text-gray-200 mb-1 pl-4">
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

                    <label className="block text-[11px] text-gray-200 mb-1 pl-4">
                      Captcha*
                    </label>
                    <input
                      type="number"
                      placeholder="12+3 ="
                      value={captcha}
                      onChange={(e) => setCaptcha(e.target.value)}
                      required
                      className="w-full rounded-md bg-white text-gray-800 text-sm px-4 py-2.5 outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-[43px] rounded-md cursor-pointer bg-[#CFA77F] hover:bg-[#c59b71] text-white font-light"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default EnquiryForm;
