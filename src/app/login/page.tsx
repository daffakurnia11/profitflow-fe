import Button from "@/components/Button";
import Typography from "@/components/Typography";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-80px-150px)] flex justify-center items-center">
      <div className="container max-w-[400px] mx-auto px-5 sm:px-0">
        <Typography.Heading level={1} className="!text-4xl text-center">
          Login
        </Typography.Heading>
        <Typography.Paragraph className="text-center mt-5">
          Please login to your account
        </Typography.Paragraph>
        <div className="flex flex-col gap-5 mt-5">
          <input
            className="w-full px-5 py-3 border border-solid border-stone-500 rounded-lg"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full px-5 py-3 border border-solid border-stone-500 rounded-lg"
            placeholder="Password"
          />
          <Button fullWidth>Login</Button>
        </div>
        <div className="content-none bg-stone-300 w-full h-[1px] my-8"></div>
        <div className="flex gap-1 justify-center">
          <Typography.Paragraph>Don't have an account?</Typography.Paragraph>
          <Link href={"/register"}>
            <Typography.Paragraph className="text-blue-400">
              Register
            </Typography.Paragraph>
          </Link>
        </div>
      </div>
    </div>
  );
}
