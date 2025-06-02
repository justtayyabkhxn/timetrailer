"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Timer from "../../public/Time.png";
import {
  Github,
  Play,
  TimerReset,
} from "lucide-react";
import Testimonials from "@/components/Testimonials";
import QuickActions from "@/components/QuickActions";
import FeatureGrid from "@/components/FeatureGrid";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-white dark:from-gray-900 dark:via-black dark:to-black text-gray-800 dark:text-gray-200 px-6 py-5 transition-colors duration-300">
      <Header />
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-6 mt-12">
        <h1 className="text-5xl font-extrabold tracking-tighter leading-tight">
          Plan Your Pace, <br />
          <span className="text-green-300 dark:text-green-300">
            Win The Race.
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          TimeTrailer helps you stay accountable, analyze your time, and get
          more done with clarity.
        </p>
        {/* Get Started Button */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() =>
              document
                .getElementById("bottom")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white dark:bg-gray-900 px-4 py-3 rounded-xl shadow hover:shadow-lg transition text-center font-semibold text-green-700 dark:text-green-300 cursor-pointer flex items-center gap-2"
          >
            <Play size={18} />
            Get Started
          </button>
          <a
            href="https://github.com/justtayyabkhxn/mybudgetory"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white dark:bg-green-300 px-4 py-3 rounded-xl shadow hover:shadow-lg transition text-center font-semibold text-green-700 dark:text-green-900 cursor-pointer flex items-center gap-2">
              <Github size={18} /> Read Docs
            </button>
          </a>
        </div>
        <Image
          src={Timer}
          alt="Time tracking dashboard"
          className="mx-auto mt-5 rounded-xl shadow-lg max-w-full h-auto"
          priority
          height={250}
          width={250}
        />
      </section>
      {/* Why TimeTrailer Section */}
      <section className="mt-5 max-w-4xl mx-auto text-center">
        <hr className="mb-6 border-indigo-300 dark:border-indigo-700" />
        <h2 className="text-3xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400 mb-4">
          Why Choose TimeTrailer?
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Whether you want to optimize your workday or balance personal
          projects, TimeTrailer provides the tools to help you focus and achieve
          your goals.
        </p>
      </section>
      {/* Features Grid */}
      <FeatureGrid/>
      {/* Quick Actions / Modes */}
      <QuickActions/>
      {/* Testimonials */}
      <Testimonials/>
      {/* Call to Action Footer */}
      <section
        id="bottom"
        className="mt-20 max-w-4xl mx-auto text-center text-indigo-600 dark:text-indigo-400 font-extrabold tracking-tight"
      >
        <hr className="mb-6 border-indigo-300 dark:border-indigo-700" />
        <h2 className="text-2xl mb-3">
          Start tracking your time smarter — today!
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          No signup required. It&apos;s free and always will be.
        </p>
        {/* Get Started Button */}
        <div className="flex gap-4 justify-center">
          <a
           href="/dashboard"
            className="bg-white dark:bg-gray-900 px-6 py-4 rounded-xl shadow hover:shadow-lg transition text-center font-bold text-green-700 dark:text-green-300 cursor-pointer flex items-center gap-2 text-2xl tracking-tighter"
          >
            <TimerReset  size={25} />
            Track Time
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
