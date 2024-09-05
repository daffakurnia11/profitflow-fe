import Button from "@/components/Button";
import Typography from "@/components/Typography";
import React from "react";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact(): React.ReactElement {
  return (
    <div className="container mb-20" id="contact">
      <Typography.Heading level={2} className="text-center !font-semibold">
        Contact Us
      </Typography.Heading>
      <div className="grid md:grid-cols-3 gap-5 mt-12">
        <div className="flex flex-col gap-4">
          <div className="w-fit mx-auto">
            <FaPhoneAlt size={40} className="text-purple-400" />
          </div>
          <Typography.Heading
            level={4}
            className="text-center uppercase !font-semibold"
          >
            Call us
          </Typography.Heading>
          <Typography.Paragraph size="lg" className="text-center">
            +62 878 7732 7543
          </Typography.Paragraph>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-fit mx-auto">
            <FaLocationDot size={40} className="text-purple-400" />
          </div>
          <Typography.Heading
            level={4}
            className="text-center uppercase !font-semibold"
          >
            Location
          </Typography.Heading>
          <Typography.Paragraph size="lg" className="text-center">
            8X Rock Street, 34 Avenue
            <br /> Surabaya, Indonesia
          </Typography.Paragraph>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-fit mx-auto">
            <FaClock size={40} className="text-purple-400" />
          </div>
          <Typography.Heading
            level={4}
            className="text-center uppercase !font-semibold"
          >
            BUSINESS HOUR
          </Typography.Heading>
          <div>
            <Typography.Paragraph size="lg" className="text-center">
              Mon-Fri : 10AM - 8PM
            </Typography.Paragraph>
            <Typography.Paragraph size="lg" className="text-center">
              Sat-Sun : Closed
            </Typography.Paragraph>
          </div>
        </div>
      </div>
      <div className="max-w-[500px] mx-auto flex flex-col gap-5 mt-8 px-10">
        <input
          className="w-full px-5 py-3 border border-solid border-stone-500 rounded-lg"
          placeholder="Your name"
        />
        <input
          className="w-full px-5 py-3 border border-solid border-stone-500 rounded-lg"
          placeholder="Your email"
        />
        <textarea
          className="w-full px-5 py-3 border border-solid border-stone-500 rounded-lg"
          placeholder="Type message here.."
          rows={4}
        />
        <Button fullWidth>Send Message</Button>
      </div>
    </div>
  );
}
