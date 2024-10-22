"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/about1.jpg",
    "/images/about2.jpg",
    "/images/about3.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey, I&aposm Rabah Sebti – a full stack developer passionate about
          solving problems and creating digital experiences that make a
          difference. This website is my little corner of the internet, where I
          share what I’m passionate about: building great web apps and turning
          complex challenges into elegant solutions.
        </Paragraph>
        <Paragraph className=" mt-4">
          I get hooked on coding whenever I realize how a few lines of code can
          create something from nothing. With a master&apos;s degree in
          Information Systems and hands-on experience in React.js, Next.js,
          Node.js, and NestJS, I&apos;ve developed expertise in transforming
          ideas into functional, intuitive, and scalable applications. I thrive
          on the entire process – from brainstorming and wireframing to
          developing and optimizing.
        </Paragraph>

        <Paragraph className=" mt-4">
          What drives me is the belief that technology isn’t just about making
          things work, it’s about making them better. I enjoy pushing the limits
          of what’s possible, whether it’s designing a smooth user interface,
          building a robust back-end, or implementing real-time functionalities
          that elevate the user experience. I focus on finding the sweet spot
          where creativity meets technology.
        </Paragraph>
        <Paragraph className=" mt-4">
          For me, this site is not just a portfolio; it’s a reflection of my
          journey and what excites me about web development. I aim to use this
          platform to showcase my work, share what I&apos;ve learned, and
          connect with others who share my passion for technology. Whether
          you&apos;re a fellow developer, a potential collaborator, or just
          curious about what I do, thanks for stopping by!
        </Paragraph>
        <Paragraph className=" mt-4">
          Let’s keep exploring, creating, and pushing the boundaries of what
          tech can do – together.
        </Paragraph>
      </div>
    </div>
  );
}
