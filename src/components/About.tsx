import { motion } from "framer-motion";
import { Code, Database, Server, Zap } from "lucide-react";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

export default function About() {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Frontend",
      description: "React, Next.js, TypeScript",
      delay: 0.1,
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: "Backend",
      description: "Spring Boot, Node.js",
      delay: 0.2,
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: "Database",
      description: "MySQL, Firebase",
      delay: 0.3,
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Performance",
      description: "API 최적화, SSR/ISR",
      delay: 0.4,
    },
  ];

  return (
    <section id="about" className="section-container section-gradient-1 py-24">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="소개" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div
            className="max-w-4xl mx-auto mb-8 lg:mb-0 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="absolute -left-5 -top-5 w-20 h-20 text-blue-500/20 -z-10"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-10 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </motion.div>

            <motion.h2
              className="text-3xl font-bold mb-6 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              사용자 경험을 중요시하는
              <br />
              프론트엔드 개발자
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              저는 사용자의 경험과 웹 애플리케이션의 성능 최적화를 최우선으로
              고민하는 프론트엔드 개발자입니다.{" "}
              <span className="text-blue-400">Next.js와 TypeScript</span>를
              비롯한 최신 웹 기술을 활용하여, SSR/ISR 적용 및 API 최적화를 통해
              사용자 경험을 크게 향상시킨 경험이 있습니다.
            </motion.p>

            <motion.p
              className="text-xl text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              또한, 팀장으로서 협업 프로세스를 개선하고{" "}
              <span className="text-purple-400">디자인 시스템 도입</span>을 통해
              서비스의 장기적인 성장을 위한 환경 구축에도 기여해왔습니다.
            </motion.p>

            {/* About 통계 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {[
                {
                  value: "5+",
                  label: "프로젝트 경험",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  value: "10+",
                  label: "사용 기술",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  value: "2+",
                  label: "개발 연차",
                  color: "from-amber-500 to-orange-500",
                },
                {
                  value: "5+",
                  label: "협업 팀원",
                  color: "from-emerald-500 to-green-500",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center border border-gray-800/50 rounded-xl py-4 px-2 bg-gray-900/30 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    scale: 1.03,
                  }}
                >
                  <motion.span
                    className={`text-2xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-sm text-gray-400 text-center mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="max-w-4xl w-full grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="card p-6 border border-gray-800/30 backdrop-blur-sm hover:border-gray-700/50 relative overflow-hidden group col-span-1 md:col-span-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: skill.delay }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.05)",
                }}
              >
                {/* 배경 그라데이션 효과 */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: skill.delay + 0.3 }}
                />

                <div className="relative z-10">
                  <motion.div className="flex items-center">
                    <div className="p-3 rounded-lg bg-gray-800/50 mr-4">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-200">
                      {skill.title}
                    </h3>
                  </motion.div>
                  <p className="text-gray-400 mt-4">{skill.description}</p>

                  <motion.div
                    className="h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-5"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: skill.delay + 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
