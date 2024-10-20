"use client";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { useStore } from "@/hooks/use-store";

import { SidebarToggle } from "./sidebar-toggle";
import { useSidebarToggle } from "../../hooks/use-sidebar-toggle";
import { Menu } from "./Menu";
import Image from "next/image";
import { navlinks } from "@/constants/navlinks";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { Heading } from "../Heading";
import { socials } from "@/constants/socials";
import { Sheet, SheetContent } from "../ui/sheet";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function Sidebar() {
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");

  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <>
      <aside
        className={cn(
          "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
          sidebar?.isOpen === false ? "w-[90px]" : "w-72"
        )}
      >
        <SidebarToggle
          isOpen={sidebar?.isOpen}
          setIsOpen={sidebar?.setIsOpen}
        />
        <div className="relative h-full flex flex-col px-6 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
          <SidebarHeader isOpen={sidebar?.isOpen} />
          <Menu isOpen={sidebar?.isOpen} />
        </div>
      </aside>
      <MenuIcon
        className="absolute flex lg:hidden w-8 h-8 top-4 left-5 md:left-11 bg-sky-900 hover:bg-sky-800 text-white p-2 rounded-md"
        onClick={() => sidebar?.setIsOpen?.()}
      />

      {isSmallScreen && (
        <Sheet
          open={sidebar?.isOpen}
          onOpenChange={() => sidebar?.setIsOpen?.()}
        >
          <SheetContent className="bg-white" side="left">
            <div className="relative h-full flex flex-col px-6 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
              <SidebarHeader isOpen={sidebar?.isOpen} />
              <Menu isOpen={sidebar?.isOpen} />
            </div>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}

const SidebarHeader = ({ isOpen }) => {
  return (
    <div className="flex space-x-2">
      <Image
        src="/images/profile.jpg"
        alt="profile"
        height={isOpen === false ? "20" : "40"}
        width={isOpen === false ? "20" : "40"}
        className="object-cover object-top rounded-full flex-shrink-0 w-10 h-10"
      />
      <div
        className={cn(
          "flex text-sm flex-col",
          isOpen === false
            ? "-translate-x-96 opacity-0"
            : "translate-x-0 opacity-100"
        )}
      >
        <p className="font-bold text-primary">Rabah Sebti</p>
        <p className="font-light text-secondary">Web Developer</p>
      </div>
    </div>
  );
};

export const Navigation = () => {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
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

      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
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
