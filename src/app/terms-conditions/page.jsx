import React from "react";
import { termsHtml } from "@/utils/legalContent";

const TermsPage = () => {
  return (
    <main className="bg-[#2A6F7E] min-h-screen py-12 md:py-16 px-4 md:px-15">
      <div className="max-w-4xl mx-auto bg-white/5 rounded-3xl px-6 md:px-10 py-8 md:py-10 text-white">
        <h1 className="apollo-heading text-2xl md:text-[28px] mb-6">
          Terms &amp; Conditions
        </h1>

        <div
          className="prose prose-invert max-w-none text-sm font-extralight leading-relaxed"
          dangerouslySetInnerHTML={{ __html: termsHtml }}
        />
      </div>
    </main>
  );
};

export default TermsPage;
