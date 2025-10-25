import { Newspaper , Home, Group , Wallpaper , Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard/",
    icon: Home,
  },
  {
    title: "Categories",
    url: "/dashboard/categories",
    icon: Group ,
  },
  {
    title: "Articles",
    url: "/dashboard/articles",
    icon: Newspaper ,
  },
  {
    title: "About",
    url: "/dashboard/about",
    icon: Wallpaper ,
  },
  
];

const Sidebars = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl text-indigo-600 font-bold">Admin Page</SidebarGroupLabel>
          <SidebarGroupContent className="mt-6">
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="text-[17px] flex gap-3">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default Sidebars;
