import { CalendarCheck, Clock, LineChart, ShieldCheck } from "lucide-react";
import { JSX } from "react";

type Feature = {
  icon: JSX.Element;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: <Clock className="h-8 w-8 text-indigo-600" />,
    title: "Precise Time Tracking",
    desc: "Track your tasks and sessions down to the second to optimize productivity.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-indigo-600" />,
    title: "Analytics & Reports",
    desc: "Visualize your time usage with daily, weekly, and monthly analytics.",
  },
  {
    icon: <CalendarCheck className="h-8 w-8 text-indigo-600" />,
    title: "Smart Scheduling",
    desc: "Plan tasks efficiently and stay on top of your time goals.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-indigo-600" />,
    title: "Private & Secure",
    desc: "Your time data is safe with end-to-end encryption and no third-party sharing.",
  },
];


const FeatureCard = ({ icon, title, desc }: Feature) => (
  <article className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow hover:shadow-lg transition">
  <div className="flex items-center gap-3 mb-2">
    <div className="text-indigo-600 dark:text-indigo-400">{icon}</div>
    <h3 className="text-xl font-extrabold tracking-tight">{title}</h3>
  </div>
  <p className="text-gray-600 dark:text-gray-300">{desc}</p>
</article>

);

const FeatureGrid=()=>{
    return(
        <section className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} />
        ))}
      </section>
    )
}

export default FeatureGrid