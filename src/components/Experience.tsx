import { motion } from "framer-motion";
import AnimatedSectionHeader from "./AnimatedSectionHeader";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "(주)에이제로컴퍼니",
    location: "대한민국",
    period: "2024.04 - 2025.04",
    role: "프론트엔드 개발자 / 팀장",
    responsibilities: [
      "Next.js + TypeScript 기반 프론트엔드 아키텍처 설계 및 SSR 최적화",
      "Tailwind CSS를 활용한 디자인 시스템 구축",
      "React Query + SWR을 통한 API 캐싱 최적화",
      "백엔드와의 협업을 통한 SQL 페치 조인(Fetch Join) 최적화 적용",
      "팀장으로서 백엔드 개발자 2명, 디자이너 2명과 함께 협업을 주도",
    ],
  },
  {
    company: "(주)한울아이씨티",
    location: "대한민국",
    period: "2023.07 - 2023.10",
    role: "백엔드 개발 인턴",
    responsibilities: [
      "병원 업무 시스템(LIS/RIS)을 기존 C#/.NET 환경에서 Spring Boot + JSP 기반의 웹 리뉴얼에 참여",
      "LIS에서 QC 검사 항목 관리 기능 개발, RIS에서 판독 관리 시스템 개선 및 웹 페이지 리팩토링",
      "RESTful API 개발 및 기존 SQL 쿼리 최적화 수행",
      "Spring Boot 기반 백엔드 API 개발 및 유지보수, JSP와 JavaScript를 활용한 프론트엔드 UI 개발",
      "MySQL을 활용한 데이터베이스 설계 및 최적화, 기존 시스템 분석 후 리팩토링 및 코드 리뷰 참여",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-40 bg-gradient-to-br from-gray-800 to-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Animation Elements */}
      <motion.div
        className="absolute -right-32 -top-32 w-64 h-64 rounded-full bg-blue-500/5"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -left-32 -bottom-32 w-80 h-80 rounded-full bg-purple-500/5"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="경력" />

        <div className="max-w-4xl mx-auto space-y-16 relative">
          {/* Timeline line with animation */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "100%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row gap-8 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot with pulsing animation */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 z-10 shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.2 + 0.3,
                }}
                whileHover={{ scale: 1.2 }}
              >
                <motion.div
                  className="absolute -inset-1 rounded-full bg-blue-500/30"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
              </motion.div>

              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                }`}
              >
                <motion.div
                  className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 h-full transition-all duration-300"
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-3 rounded-full bg-blue-900/30 flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Briefcase className="w-5 h-5 text-blue-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-200">
                        {experience.role}
                      </h3>
                      <p className="text-purple-400 text-sm font-medium">
                        {experience.period}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4 gap-2">
                    <h4 className="text-xl font-semibold text-blue-400">
                      {experience.company}
                    </h4>
                    <span className="text-gray-500 text-sm">
                      {experience.location}
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-400">
                    {experience.responsibilities.map((responsibility, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i + 0.5 + index * 0.2 }}
                      >
                        <motion.span
                          className="mr-2 text-blue-400"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            type: "spring",
                            delay: 0.1 * i + 0.5 + index * 0.2,
                          }}
                        >
                          •
                        </motion.span>
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
