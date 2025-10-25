"use client"
import { cn } from "@/helper/cn";
import { navLiks } from "@/helper/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Menu = () => {
    const path = usePathname();
  return (
    <div className="hidden gap-4 md:flex">
     {navLiks.map((link)=>(
        <Link key={link.name} href={link.href} className={cn("link", path === link.href && 'font-bold')}>
          {link.name}
        </Link>
     ))}
    </div>
  );
};

export default Menu;
