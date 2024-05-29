import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Pricing Title",
  description: "Pricing Description",
  keywords: ["Pricing Page", "Juan"]
}

export default function PricingPage(){
  return (
    <>
      <span>Pricing Page</span>
    </>
  );
}