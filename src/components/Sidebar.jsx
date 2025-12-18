// Muhammad Siddiq
import { Home, Gamepad2, CalendarDays, BarChart3, User } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const items = [
    { name: "Dashboard", path: "/", icon: Home },
    { name: "Organizer", path: "/organizers", icon: Gamepad2 },
    { name: "All Users", path: "/allusers", icon: CalendarDays },
    { name: "Stats", path: "/statict", icon: BarChart3 },
    { name: "Profile", path: "/profile", icon: User },
  ];

  return (
    <div
      className="
        fixed z-50
        bottom-4 left-1/2 -translate-x-1/2
        w-[360px] max-w-[95%]
        bg-[#1c1c1c]
        rounded-2xl p-2 shadow-lg

        md:bottom-6

        lg:top-1/2 lg:left-6 lg:bottom-auto
        lg:-translate-x-0 lg:-translate-y-1/2
        lg:w-60 lg:p-3
      "
    >
      <div
        className="
          flex items-center justify-between
          lg:flex-col lg:items-stretch lg:gap-1
        "
      >
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className="
                relative flex flex-col items-center justify-center
                w-16 h-14 text-xs

                lg:flex-row lg:justify-start lg:gap-3
                lg:w-full lg:h-12 lg:px-4
                lg:rounded-xl
              "
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600"
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 24,
                      }}
                    />
                  )}

                  <Icon
                    size={20}
                    className={`z-10 ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  />

                  <span
                    className={`z-10 mt-1 lg:mt-0 text-xs lg:text-sm font-medium ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
