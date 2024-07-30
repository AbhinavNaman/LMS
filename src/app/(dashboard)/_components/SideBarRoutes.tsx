"use client"
import { LayoutDashboardIcon, CompassIcon, List, BarChart } from "lucide-react"
import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";

const guestroutes = [
    {
        icon: LayoutDashboardIcon,
        label: "dashboard",
        href: "/",
    },
    {
        icon: CompassIcon,
        label: "Browse",
        href: "/search",
    },
]
const teacherRoutes = [
    {
        icon: List,
        label: "Courses",
        href: "/teacher/courses",
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/teacher/analytics",
    },
]

export const SidebarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.includes("/teacher");

    const routes = isTeacherPage? teacherRoutes : guestroutes;
    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}