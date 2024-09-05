import Card from "@/components/Card";
import Typography from "@/components/Typography";
import React from "react";

export default function Pricing(): React.ReactElement {
  return (
    <div className="container pb-20 flex flex-col justify-center">
      <Typography.Heading level={2} className="text-center !font-semibold">
        Pricing
      </Typography.Heading>
      <div className="grid lg:grid-cols-3 gap-5 mt-12">
        <Card
          category="Tier 1"
          name="Basic"
          price={19}
          features={["Track in/out products", "Record sales", "Sales analysis"]}
        />
        <Card
          category="Tier 2"
          name="Business"
          price={49}
          features={["All Basic features", "Chart analytics", "24/7 support"]}
        />
        <Card
          category="Tier 3"
          name="Entrepreneur"
          price={99}
          features={[
            "All Business features",
            "Data export in Excel",
            "AI predictions",
          ]}
        />
      </div>
    </div>
  );
}
