"use client";

import { usePathname } from "next/navigation";
import CtaForm from "@/Components/UI/CtaForm";

const CtaWrapper = () => {
  const pathname = usePathname();

  if (pathname === "/contact"
    || pathname === "/terms-conditions"
    || pathname === "/privacy-policy"
  ) return null;

  return <CtaForm />;
};

export default CtaWrapper;
