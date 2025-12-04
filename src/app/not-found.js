import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="px-6 lg:px-22 md:px-10 py-60">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-[28px] md:text-[46px] Primary-font uppercase leading-tight bg-gradient-to-r from-[#CFA77F] via-[#ffff] to-[#ffff] bg-clip-text text-transparent">
          Oops! we can't find that page.
        </h2>
        <p className="py-4 text-[#e7e4e0] ">
          It seems like the page you were looking for has disappeared into thin air! Don't worry, though. You can:
        </p>
        <Link
          href="/"
          className="cursor-pointer uppercase px-5 py-3 bg-[#CFA77F] text-white rounded-xl hover:bg-[#cead8c] transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;