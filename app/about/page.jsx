import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";

import About from "@/components/About";

export const metadata = {
  title: "About | Rabah Sebti",
  description: "Rabah Sebti is a full-stack developer.",
};

export default function AboutPage() {
  return (
    <Container>
      <Heading className="font-black text-black">About Me</Heading>
      <About />
    </Container>
  );
}
