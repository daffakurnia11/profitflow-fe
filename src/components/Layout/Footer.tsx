import React from "react";
import Typography from "../Typography";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer(): React.ReactElement {
  return (
    <div className="container py-8">
      <div className="w-fit mx-auto flex gap-6 mb-6">
        <FaFacebook size={40} />
        <FaTwitter size={40} />
        <FaLinkedin size={40} />
      </div>
      <Typography.Paragraph className="text-center">
        © 2024 ProfitFlow, All Rights Reserved.
      </Typography.Paragraph>
    </div>
  );
}
