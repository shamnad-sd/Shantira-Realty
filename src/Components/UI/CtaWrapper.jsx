"use client";

import { usePathname } from "next/navigation";
import CtaForm from "@/Components/UI/CtaForm";

const CtaWrapper = () => {
  const pathname = usePathname();

  // hide CTA on contact page
  if (pathname === "/contact") return null;

  return <CtaForm />;
};

export default CtaWrapper;
