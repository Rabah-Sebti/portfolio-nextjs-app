import {
  IconBolt,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBriefcase2,
  IconMail,
  IconMessage2,
} from "@tabler/icons-react";

export function getMenuList(pathname) {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "Home",
          active: pathname === "/",
          icon: IconBolt,
          submenus: [],
        },
        {
          href: "/about",
          label: "About",
          active: pathname.includes("/about"),
          icon: IconMessage2,
          submenus: [],
        },
        {
          href: "/projects",
          label: "Projects",
          active: pathname.includes("/projects"),
          icon: IconBriefcase2,
          submenus: [],
        },
        {
          href: "/contact",
          label: "Contact",
          active: pathname.includes("/contact"),
          icon: IconMail,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Socials",
      menus: [
        {
          href: "https://facebook.com/minouch.sebti.7",
          label: "Facebook",
          icon: IconBrandFacebook,
          active: false,
          submenus: [],
        },
        {
          href: "https://linkedin.com/in/rabah-sebti",
          label: "LinkedIn",
          icon: IconBrandLinkedin,
          active: false,

          submenus: [],
        },
      ],
    },
  ];
}
