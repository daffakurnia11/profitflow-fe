import Typography from "@/components/Typography";

export default function Home() {
  return (
    <>
      <Typography.Heading level={1}>Heading 1</Typography.Heading>
      <Typography.Heading level={2}>Heading 2</Typography.Heading>
      <Typography.Heading level={3}>Heading 3</Typography.Heading>
      <Typography.Heading level={4}>Heading 4</Typography.Heading>
      <Typography.Heading level={5}>Heading 5</Typography.Heading>
      <Typography.Heading level={6}>Heading 6</Typography.Heading>
      <Typography.Paragraph size="lg">Paragraph lg</Typography.Paragraph>
      <Typography.Paragraph size="base">Paragraph base</Typography.Paragraph>
      <Typography.Small size="base">Small base</Typography.Small>
      <Typography.Small size="sm">Small sm</Typography.Small>
    </>
  );
}
