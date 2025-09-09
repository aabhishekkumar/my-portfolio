import React from "react";

const Work = () => {
const topics = [
  { id: 1, title: "React Basics", desc: "Components, props, and state management." },
  { id: 2, title: "JavaScript ES6+", desc: "Arrow functions, async/await, and modules." },
  { id: 3, title: "Tailwind CSS", desc: "Utility-first styling for rapid UI building." },
  { id: 4, title: "APIs", desc: "REST APIs, fetch, and async data handling." },
  { id: 5, title: "Express", desc: "API routing and HTTP methods (GET, POST, etc.)." },
  { id: 6, title: "GraphQL", desc: "Query and mutate data efficiently." },
  { id: 7, title: "Prompt Engineering", desc: "Designing effective prompts for AI models." }
];


  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold underline text-center mb-8 bg">Technologies Tech Stack</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="p-5 bg-gray-100 rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold text-amber-900">{topic.title}</h2>
            <p className="text-gray-600 mt-2">{topic.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
