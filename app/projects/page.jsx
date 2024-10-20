import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";

export const metadata = {
  title: "Projects | Rabah Sebti",
  description: "Rabah Sebti is a full stack develope.",
};

export default function Projects() {
  return (
    <Container>
      {/* <span className="text-4xl">⚡</span> */}
      <Heading className="font-black text-black mb-10">
        What I&apos;ve been working on
      </Heading>
      <Products />
    </Container>
  );
}
