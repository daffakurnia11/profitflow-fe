import Typography from "@/components/Typography";
import Image from "next/image";

export default function About(): React.ReactElement {
  return (
    <div className="relative py-20 px-10">
      <div className="md:block hidden absolute -z-[1] top-0 xl:left-[200px] lg:left-[130px] md:left-[75px] -translate-x-1/2 max-w-[600px] -rotate-[3deg]">
        <Image
          src={"/img/blobs3.svg"}
          alt="blobs"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="container md:grid grid-cols-3 items-center min-h-[500px]">
        <div className="col-span-1 flex flex-col justify-center">
          <div className="flex justify-center">
            <Typography.Heading
              level={2}
              className="!text-4xl md:text-slate-50"
            >
              About <br className="md:block hidden" />
              ProfitFlow
            </Typography.Heading>
          </div>
        </div>
        <div className="col-span-2 max-w-[630px] mx-auto md:pt-24 pt-8">
          <Typography.Paragraph size="lg" className="!font-semibold">
            Our ERP system is designed to help business owners streamline their
            operations, manage inventory efficiently, and maximize profits. With
            our user-friendly interface, businesses of all sizes can benefit
            from the powerful features we offer
          </Typography.Paragraph>
          <div className="mx-auto max-w-[400px] mt-6">
            <Image
              src={"/img/about-img.svg"}
              alt="about illustration"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
