import { motion } from "framer-motion";
import { Code, Database, Server, Zap } from "lucide-react";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

export default function About() {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Frontend",
      description: "React, Next.js, Redux",
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: "Backend",
      description: "Node.js, Express, Fastify",
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: "Database",
      description: "MongoDB, Mongoose",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Performance",
      description: "Optimization, Caching",
    },
  ];

  return (
    <section
      id="about"
      className="py-40 bg-gradient-to-br from-blue-50 to-indigo-100 transition-colors duration-300 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="About Me" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              As a passionate MERN Stack Developer, I specialize in building
              robust and scalable web applications. With a strong foundation in
              MongoDB, Express.js, React, and Node.js, I create seamless
              full-stack solutions that deliver exceptional user experiences.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              My expertise extends to modern frameworks like Next.js and state
              management tools like Redux. I'm committed to writing clean,
              efficient code and staying up-to-date with the latest industry
              trends to deliver cutting-edge solutions for my clients.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
