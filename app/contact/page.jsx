import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";

export const metadata = {
  title: "Contact | Rabah Sebti",
  description: "Rabah Sebti is a full stack developer",
};

export default function Projects() {
  return (
    <Container>
      {/* <span className="text-4xl">✉️</span> */}
      <Heading className="font-black text-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Reach out to me over email or fill up this contact form.
      </Paragraph>
      <Contact />
    </Container>
  );
}
