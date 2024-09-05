import React from "react";
import Typography from "../Typography";
import Button from "../Button";

interface CardProps {
  category: string;
  name: string;
  price: number;
  features: string[];
}

export default function Card({
  category,
  name,
  price,
  features,
}: CardProps): React.ReactElement {
  return (
    <div className="border border-solid border-stone-500 rounded-lg divide-y divide-neutral-300 shadow-md mx-5 md:mx-0">
      <div className="py-6 px-8">
        <Typography.Heading level={6} className="text-center">
          {category}
        </Typography.Heading>
        <Typography.Heading level={4} className="text-center uppercase mt-2">
          {name}
        </Typography.Heading>
      </div>
      <div className="py-6 px-8 flex justify-center">
        <div className="flex items-baseline">
          <Typography.Paragraph className="!text-4xl text-emerald-800">
            $
          </Typography.Paragraph>
          <Typography.Heading
            level={5}
            className="!text-5xl !font-medium text-emerald-800"
          >
            {price}
          </Typography.Heading>
          <Typography.Paragraph className="!text-3xl text-emerald-800">
            /month
          </Typography.Paragraph>
        </div>
      </div>
      <div className="py-6 px-8">
        <ul className="list-disc flex flex-col gap-4 w-fit mx-auto mb-10">
          {features.map((feature) => (
            <li key={feature}>
              <Typography.Paragraph size="lg">{feature}</Typography.Paragraph>
            </li>
          ))}
        </ul>
        <Button fullWidth>Purchase Now!</Button>
      </div>
    </div>
  );
}
