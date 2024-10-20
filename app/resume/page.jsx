import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight2 } from "@/components/Highlight2";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black text-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves
        <Highlight2>building products</Highlight2> and
        <Highlight2>web applications</Highlight2>
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
