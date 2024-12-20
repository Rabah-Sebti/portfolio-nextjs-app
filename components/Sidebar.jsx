"use client";
import { navlinks } from "@/constants/navlinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconChevronsLeft,
  IconLayoutSidebarRightCollapse,
} from "@tabler/icons-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const isMobile = () => {
  if (typeof window === "undefined") return false;
  const width = window.innerWidth;

  return width <= 1024;
};

export const Sidebar = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");

  const [open, setOpen] = useState(isMobile() ? false : true);

  return (
    <>
      <AnimatePresence>
        <div className="relative">
          {open ? (
            <button
              className="absolute  top-4 left-52 h-8 w-8 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-20"
              onClick={() => setOpen(!open)}
            >
              <IconChevronsLeft className="h-4 w-4 text-secondary" />
            </button>
          ) : (
            <button
              className="absolute  top-4 left-4 h-8 w-8 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-20"
              onClick={() => setOpen(!open)}
            >
              <IconChevronsLeft className="h-4 w-4 text-secondary" />
            </button>
          )}
        </div>
        {open && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -200 }}
            className="px-6 z-[100] py-10 bg-sky-50 max-w-[14rem] lg:w-fit  fixed lg:relative  h-screen overflow-auto left-0 flex flex-col justify-between"
          >
            <div className="">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <Badge href="/resume" text="Read Resume" />
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="fixed  bottom-4 right-4 h-8 w-8 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-10"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-4 w-4 text-secondary" />
      </button>
    </>
  );
};

export const Navigation = ({ setOpen }) => {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-secondary hover:text-sky-900 transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-white shadow-lg text-sky-900"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading
        as="p"
        className="text-sm text-black md:text-sm lg:text-sm pt-10 px-2"
      >
        Socials
      </Heading>
      {socials.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex space-x-2">
      <Image
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
        alt="Avatar"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0"
      />
      <div className="flex text-sm flex-col">
        <p className="font-bold text-primary">Rabah Sebti</p>
        <p className="font-light text-secondary">Developer</p>
      </div>
    </div>
  );
};
