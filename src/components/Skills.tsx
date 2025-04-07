import { motion } from "framer-motion";
import AnimatedSectionHeader from "./AnimatedSectionHeader";
import { Code, Server, Database, Workflow } from "lucide-react";

const skillCategories = [
  {
    title: "프론트엔드 기술",
    description: "사용자 중심 웹 애플리케이션 개발을 위한 최신 기술 스택",
    skills: [
      {
        name: "React",
        level: 90,
        color: "from-blue-500 to-blue-400",
        stroke: "#3b82f6",
      },
      {
        name: "TypeScript",
        level: 85,
        color: "from-blue-600 to-blue-500",
        stroke: "#2563eb",
      },
      {
        name: "Next.js",
        level: 88,
        color: "from-blue-700 to-blue-600",
        stroke: "#1d4ed8",
      },
      {
        name: "HTML/CSS",
        level: 92,
        color: "from-blue-400 to-blue-300",
        stroke: "#60a5fa",
      },
      {
        name: "Redux",
        level: 80,
        color: "from-indigo-500 to-indigo-400",
        stroke: "#6366f1",
      },
    ],
    icon: Code,
    iconColor: "text-blue-500",
  },
  {
    title: "백엔드 기술",
    description: "안정적이고 확장 가능한 서버 시스템 구현 능력",
    skills: [
      {
        name: "Node.js",
        level: 80,
        color: "from-green-600 to-green-500",
        stroke: "#16a34a",
      },
      {
        name: "Express",
        level: 78,
        color: "from-green-700 to-green-600",
        stroke: "#15803d",
      },
      {
        name: "Spring Boot",
        level: 75,
        color: "from-green-500 to-green-400",
        stroke: "#22c55e",
      },
      {
        name: "RESTful API",
        level: 85,
        color: "from-emerald-500 to-emerald-400",
        stroke: "#10b981",
      },
    ],
    icon: Server,
    iconColor: "text-green-500",
  },
  {
    title: "데이터베이스",
    description: "효율적인 데이터 관리 및 퍼포먼스 최적화",
    skills: [
      {
        name: "MySQL",
        level: 85,
        color: "from-purple-600 to-purple-500",
        stroke: "#9333ea",
      },
      {
        name: "Firebase",
        level: 82,
        color: "from-orange-500 to-orange-400",
        stroke: "#f97316",
      },
      {
        name: "MongoDB",
        level: 75,
        color: "from-green-600 to-green-500",
        stroke: "#16a34a",
      },
      {
        name: "SQL 최적화",
        level: 80,
        color: "from-purple-500 to-purple-400",
        stroke: "#a855f7",
      },
    ],
    icon: Database,
    iconColor: "text-purple-500",
  },
  {
    title: "개발 도구 및 방법론",
    description: "효율적인 개발 환경 구성 및 협업 체계",
    skills: [
      {
        name: "Git",
        level: 88,
        color: "from-orange-600 to-orange-500",
        stroke: "#ea580c",
      },
      {
        name: "Docker",
        level: 72,
        color: "from-blue-600 to-blue-500",
        stroke: "#2563eb",
      },
      {
        name: "Jira/Confluence",
        level: 80,
        color: "from-blue-500 to-blue-400",
        stroke: "#3b82f6",
      },
      {
        name: "Agile/Scrum",
        level: 85,
        color: "from-teal-500 to-teal-400",
        stroke: "#14b8a6",
      },
    ],
    icon: Workflow,
    iconColor: "text-yellow-500",
  },
];

// 원형 차트 컴포넌트 추가
function CircularChart({
  percentage,
  stroke,
  size = 100,
}: {
  percentage: number;
  stroke: string;
  size?: number;
}) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
        {/* 배경 원 */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="rgba(55, 65, 81, 0.5)"
          strokeWidth="8"
          className="opacity-30"
        />

        {/* 진행 원 */}
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={stroke}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>

      <motion.div
        className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-200"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {percentage}%
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-container section-gradient-1 py-32">
      <div className="container mx-auto px-6">
        <AnimatedSectionHeader title="기술 스택" />

        <motion.p
          className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          다양한 프로젝트에서 활용한 기술과 도구들입니다. 주요 기술에 대한
          숙련도와 함께 제시되어 있습니다.
        </motion.p>

        <div className="space-y-16 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="flex md:flex-row md:items-center gap-6 mb-8">
                <motion.div
                  className="icon-box w-16 h-16 flex-shrink-0 relative overflow-hidden"
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-lg"
                    animate={{
                      rotate: [0, 180],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  <category.icon
                    className={`w-8 h-8 ${category.iconColor} relative z-10`}
                  />
                </motion.div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-200">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 mt-1">{category.description}</p>
                </div>
              </div>

              <div className="flex justify-evenly py-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="bg-gray-800/70 rounded-lg flex flex-col md:flex-row items-center gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2 + skillIndex * 0.1,
                    }}
                    whileHover={{
                      y: -3,
                      boxShadow: "0 8px 15px -5px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {/* 원형 차트 추가 */}
                    <div className="flex-shrink-0">
                      <CircularChart
                        percentage={skill.level}
                        stroke={skill.stroke}
                        size={90}
                      />
                    </div>

                    <div className="flex-grow text-center md:text-left">
                      <h4 className="text-lg font-semibold text-gray-200">
                        {skill.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 기타 기술 스택 - 더 간략한 형태로 제시 */}
        <motion.div
          className="max-w-5xl mx-auto mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-200 mb-8">
            추가 역량
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              "Jest",
              "React Testing Library",
              "Webpack",
              "Vite",
              "SASS/SCSS",
              "Storybook",
              "Figma",
              "AWS",
              "GitHub Actions",
              "Firebase Auth",
              "SEO 최적화",
              "Web Accessibility",
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 border border-gray-700/50 py-3 px-4 rounded-lg"
                whileHover={{ y: -3, backgroundColor: "rgba(30, 41, 59, 0.7)" }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <span className="text-gray-300 text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
