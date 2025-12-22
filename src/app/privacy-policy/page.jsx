import React from "react";
import { privacyHtml } from "@/utils/legalContent";

const PrivacyPolicyPage = () => {
  return (
    <main className=" min-h-screen pt-30 pb-20 md:pt-56 md:pb-20 px-4 md:px-15">
      <div className="max-w-4xl mx-auto bg-white/5 rounded-3xl px-6 md:px-10 pt-8 md:py-10 text-white">
        <h1 className="apollo-heading text-2xl md:text-[28px] mb-6">
          Privacy Policy
        </h1>

        <div
          className="prose prose-invert max-w-none text-sm font-extralight leading-relaxed pt-10"
          dangerouslySetInnerHTML={{ __html: privacyHtml }}
        />
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
