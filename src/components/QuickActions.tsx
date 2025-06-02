import { ListChecks, PauseCircle, Play } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

const ModeCard = ({ href, icon, title, bg, color, desc }: Mode) => (
  <Link
  href={href}
  className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow hover:shadow-2xl hover:scale-[1.03] transition duration-300 cursor-pointer flex flex-col items-center text-center"
>
  {/* Icon and Title Side by Side */}
  <div className="flex items-center gap-2 mb-3">
    <div className={`${bg} p-3 rounded-full`}>{icon}</div>
    <h3 className={`text-xl font-bold ${color}`}>{title}</h3>
  </div>

  {/* Description Centered */}
  <p className="text-gray-600 dark:text-gray-300">{desc}</p>
</Link>

);
type Mode = {
  href: string;
  icon: JSX.Element;
  title: string;
  bg: string;
  color: string;
  desc: string;
};

const modes: Mode[] = [
  {
    href: "/dashboard",
    icon: <Play className="h-3 w-3" />,
    title: "Start Tracking",
    bg: "bg-green-600",
    color: "text-green-600",
    desc: "Begin a new time tracking session and stay focused.",
  },
  {
    href: "/reports",
    icon: <ListChecks className="h-3 w-3" />,
    title: "View Reports",
    bg: "bg-blue-600",
    color: "text-blue-600",
    desc: "Review how your time has been spent with rich visual summaries.",
  },
  {
    href: "/settings",
    icon: <PauseCircle className="h-3 w-3" />,
    title: "Customize Settings",
    bg: "bg-yellow-600",
    color: "text-yellow-600",
    desc: "Set time goals, customize reminders, and manage preferences.",
  },
];

const QuickActions=()=>{
    return (
        <section className="mt-20 max-w-6xl mx-auto">
        <hr className="mb-6 border-indigo-300 dark:border-indigo-700" />
        <h2 className="text-3xl font-extrabold tracking-tight text-center text-indigo-600 dark:text-indigo-400 mb-10">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modes.map((mode, i) => (
            <ModeCard key={i} {...mode} />
          ))}
        </div>
      </section>
    )
}

export default QuickActions;
