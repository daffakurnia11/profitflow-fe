import Button from "@/components/Button";
import Typography from "@/components/Typography";
import Image from "next/image";

export default function Hero(): React.ReactElement {
  return (
    <div className="relative h-[800px] flex flex-col justify-center">
      <div className="absolute -z-[1] bottom-1/4 right-0 translate-y-1/2 rotate-60 max-w-[300px] md:max-w-[400px]s">
        <Image
          src={"/img/blobs2.svg"}
          alt="blobs"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="container px-6 flex flex-col gap-4">
        <Typography.Heading
          level={1}
          className="!text-4xl !font-semibold text-center"
        >
          Manage Your Business Efficiently
          <br />
          with Our ERP System
        </Typography.Heading>
        <Typography.Paragraph size="lg" className="text-center">
          Track your inventory, monitor your sales, and maximize your profits
          with ease.
        </Typography.Paragraph>
        <div className="flex justify-center">
          <Button>Get Started</Button>
        </div>
        <div className="flex justify-center max-w-[350px] mx-auto">
          <Image
            src={"/img/jumbotron-img.svg"}
            alt="jumbotron illustration"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
