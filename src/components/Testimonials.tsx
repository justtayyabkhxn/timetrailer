// components/Footer.tsx
"use client";

import { Smile } from "lucide-react";

type Testimonial = {
  text: string;
  author: string;
};

const TestimonialCard = ({ text, author }: Testimonial) => (
  <blockquote className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow text-center">
    <Smile className="h-6 w-6 text-yellow-500 mb-2 mx-auto" />
    <p className="italic text-sm text-gray-600 dark:text-gray-300">{text}</p>
    <footer className="mt-2 font-bold">– {author}</footer>
  </blockquote>
);

const testimonials: Testimonial[] = [
  {
    text: "TimeTrailer helped me take control of my chaotic work hours. It’s now my go-to productivity tool!",
    author: "Sana Rahman, Freelance Designer",
  },
  {
    text: "From daily tracking to monthly reviews, TimeTrailer has been a game-changer in managing my remote team's output.",
    author: "Arjun Patel, Project Manager",
  },
];

const Testimonials = () => {
  return (
    <section className="mt-20 max-w-5xl mx-auto text-center">
        <hr className="mb-8 border-indigo-300 dark:border-indigo-700" />
        <h2 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-8 tracking-tight">
          What Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </section>
  );
};

export default Testimonials;
