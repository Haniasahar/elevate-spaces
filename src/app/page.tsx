"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Demo from "@/components/demo";
import Services from "@/components/services";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />

      <Demo />

      <Services />

      <Pricing />

      <Footer />
    </div>
  );
}
