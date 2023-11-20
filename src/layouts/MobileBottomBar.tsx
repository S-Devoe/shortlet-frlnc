"use client";
import HeartIcon from "@/components/icons/navs/HeartIcon";
import LocationIcon from "@/components/icons/navs/LocationIcon";
import ProfileIcon from "@/components/icons/navs/ProfileIcon";
import SMSIcon from "@/components/icons/navs/SMSIcon";
import SearchIcon from "@/components/icons/navs/SearchIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MobileBottomBar = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 w-full h-[5.25rem] px-8 py-3 flex items-center justify-between gap-5">
      {navLinks.map((link, i) => (
        <Link
          href={link.route}
          key={`link-${i + 1}`}
          className={` ${
            pathname.includes(link.route) ? "text-orange" : "text-gray6"
          }  border-t border-t-gray10`}
        >
          {link.icon}
        </Link>
      ))}
    </nav>
  );
};

export default MobileBottomBar;

const navLinks = [
  {
    route: "/search",
    icon: <SearchIcon />,
  },
  {
    route: "/waitlist",
    icon: <HeartIcon />,
  },
  {
    route: "/location",
    icon: <LocationIcon />,
  },
  {
    route: "/message",
    icon: <SMSIcon />,
  },
  {
    route: "/profile",
    icon: <ProfileIcon />,
  },
];
