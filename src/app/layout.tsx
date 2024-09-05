import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import "@/styles/globals.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-dvh">
          <div className="absolute -z-[1] top-0 left-10 -translate-x-1/2 -translate-y-1/2 max-w-[600px]">
            <Image
              src={"/img/blobs1.svg"}
              alt="blobs"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
