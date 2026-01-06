import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // all
  {
    id: 1,
    name: "Python",
    level: "90",
    category: "all",
  },
  {
    id: 2,
    name: "Data Structures and Algorithms",
    level: "80",
    category: "all",
  },
  {
    id: 3,
    name: "Pandas",
    level: "75",
    category: "all",
  },

  // Frontend
  {
    id: 4,
    name: "HTML/CSS",
    level: "90",
    category: "Frontend",
  },
  {
    id: 5,
    name: "JavaScript",
    level: "85",
    category: "Frontend",
  },
  {
    id: 6,
    name: "React",
    level: "85",
    category: "Frontend",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    level: "85",
    category: "Frontend",
  },
  {
    id: 8,
    name: "Three.js",
    level: "65",
    category: "Frontend",
  },
  {
    id: 9,
    name: "Next.js",
    level: "85",
    category: "Frontend",
  },
  {
    id: 10,
    name: "TypeScript",
    level: "50",
    category: "Frontend",
  },

  // Backend
  {
    id: 11,
    name: "Node.js",
    level: "50",
    category: "Backend",
  },
  {
    id: 12,
    name: "Express.js",
    level: "90",
    category: "Backend",
  },
  {
    id: 13,
    name: "MongoDB",
    level: "90",
    category: "Backend",
  },
  {
    id: 14,
    name: "MySQL",
    level: "90",
    category: "Backend",
  },

  // Tools
  {
    id: 15,
    name: "Git/GitHub",
    level: "80",
    category: "Tools",
  },
  {
    id: 16,
    name: "Figma",
    level: "75",
    category: "Tools",
  },
  {
    id: 17,
    name: "VS Code",
    level: "95",
    category: "Tools",
  },
  {
    id: 18,
    name: "Cursor",
    level: "90",
    category: "Tools",
  },
  {
    id: 19,
    name: "Vensim",
    level: "80",
    category: "Tools",
  },
  {
    id: 20,
    name: "Blender",
    level: "30",
    category: "Tools",
  },
  {
    id: 21,
    name: "Prismic",
    level: "70",
    category: "Tools",
  },
  {
    id: 22,
    name: "Scratch",
    level: "90",
    category: "Tools",
  },
];

const categories = ["all", "Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/3-">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, id) => (
            <button
              key={id}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, id) => (
            <div
              key={id}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full bg-primary origin-left animate-[grow_1.5s_ease-in-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
