import { motion } from "framer-motion";
import AnimatedSectionHeader from "./AnimatedSectionHeader";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "기계공학부 (편입)",
    institution: "성균관대학교",
    period: "2018.03 ~ 2022.08",
    achievements: ["학점: 3.73 / 4.5", "자연과학대학", "졸업"],
  },
  {
    degree: "컴퓨터공학과",
    institution: "중앙대학교 평생교육원",
    period: "2016.03 ~ 2018.02",
    achievements: ["학점: 3.96 / 4.5", "졸업"],
  },
  {
    degree: "풀스택 개발자 취업캠프 (Python)",
    institution: "멀티캠퍼스",
    period: "2022.07 ~ 2022.12",
    achievements: [
      "Python 기반 웹 개발",
      "Django 프레임워크",
      "데이터베이스 및 API 개발",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-40 bg-gradient-to-br from-gray-900 to-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <AnimatedSectionHeader title="학력" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 mr-4 rounded-full bg-blue-900/40">
                  <GraduationCap className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-200">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-purple-400">{edu.period}</p>
                </div>
              </div>
              <p className="text-lg font-semibold mb-4 text-blue-400">
                {edu.institution}
              </p>
              <ul className="space-y-2 text-gray-400">
                {edu.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
