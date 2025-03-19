import { GraduationCap, Calendar, Award } from "lucide-react";
import AnimatedSectionHeader from "./AnimatedSectionHeader";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "GC University Faisalabad",
      period: "2018 – 2022",
      achievements: [
        "Graduated with honors",
        "Specialized in Web Technologies and Artificial Intelligence",
        "Completed capstone project on 'Intelligent Web Application for Healthcare'",
      ],
    },
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "GC University Faisalabad",
      period: "2018 – 2022",
      achievements: [
        "Graduated with honors",
        "Specialized in Web Technologies and Artificial Intelligence",
        "Completed capstone project on 'Intelligent Web Application for Healthcare'",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-40 bg-gradient-to-br from-indigo-50 to-purple-100 transition-colors duration-300 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Education" />

        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 rounded-br-full z-0 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  {edu.degree}
                </h3>
                <p className="text-xl text-gray-600 mb-4">{edu.institution}</p>
                <p className="text-gray-600 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.period}
                </p>
                <h4 className="text-lg font-medium mb-2 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
