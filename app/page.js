import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  const startYear = 2021;
  const currentYear = new Date().getFullYear();

  const numberOfYears = currentYear - startYear;
  return (
    <Container>
      {/* <span className="text-4xl ">👋</span> */}
      <Heading className="font-black text-black ">
        Hello there! I&apos;m Rabah
      </Heading>
      <Paragraph
        className="first-letter:text-7xl first-letter:font-bold 
  first-letter:mr-3 first-letter:float-left max-w-xl mt-4"
      >
        I&apos;m a full-stack developer with over
        {/* <Highlight> */}
        <span class="before:block before:absolute before:-inset-[2px] before:-skew-y-3 before:bg-sky-900 relative inline-block mx-2">
          <span class="relative text-white">{numberOfYears} years</span>
        </span>
        {/* </Highlight>{" "} */}
        of experience. I began my career as a freelancer, where I had the
        opportunity to create E-commerce platforms, E-learning websites, and
        various dashboards. After freelancing, I worked for two companies: first
        at BMsoft, and now at Smart Vision, where I currently work.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4 ">
        This experience allowed me to develop a strong expertise in both
        front-end and back-end development, as well as the ability to manage
        projects from concept to completion.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4 text-black"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
