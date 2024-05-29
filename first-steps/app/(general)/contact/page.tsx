import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Contact Title",
  description: "Contact Description",
  keywords: ["Contact Page", "Juan"]
}

export default function ContactPage(){
  return (
    <>
      <span>Contact Page</span>
    </>
  );
}