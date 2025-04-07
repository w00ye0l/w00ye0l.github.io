import { motion } from "framer-motion";
import AnimatedSectionHeader from "./AnimatedSectionHeader";
import { LineChart, Zap, Users, Compass, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: <LineChart className="w-12 h-12 text-blue-500" />,
    title: "웹 성능 최적화",
    description:
      "초기 페이지 로딩 속도를 최대 60%까지 개선하는 SSR/ISR 적용과 Core Web Vitals 점수 향상을 위한 최적화 서비스",
    achievements: [
      "FCP를 2.8초에서 1.1초로 단축",
      "불필요한 API 요청 35% 감소",
      "Lighthouse 성능 점수 향상",
    ],
  },
  {
    icon: <Compass className="w-12 h-12 text-purple-500" />,
    title: "UI/UX 개선 컨설팅",
    description:
      "사용자 중심의 인터페이스 설계와 Tailwind CSS를 활용한 일관된 디자인 시스템 구축으로 브랜드 경험 향상",
    achievements: [
      "UI 개발 속도 20% 향상",
      "코드 중복 30% 감소",
      "사용자 이탈률 감소",
    ],
  },
  {
    icon: <Zap className="w-12 h-12 text-yellow-500" />,
    title: "백엔드 API 최적화",
    description:
      "프론트와 백엔드 간 효율적인 데이터 통신을 위한 API 설계 및 SQL 쿼리 최적화로 응답 속도 크게 향상",
    achievements: [
      "API 응답 속도 64% 개선",
      "서버 부하 감소",
      "데이터 페칭 전략 개선",
    ],
  },
  {
    icon: <Users className="w-12 h-12 text-green-500" />,
    title: "개발팀 생산성 향상",
    description:
      "API 명세서 표준화, 코드 리뷰 문화 도입, 디자인 시스템 구축을 통한 개발팀 협업 체계 개선",
    achievements: [
      "개발 주기 15% 단축",
      "팀원 간 커뮤니케이션 개선",
      "코드 품질 향상",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-40 bg-gradient-to-br from-gray-800 to-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <AnimatedSectionHeader title="서비스" />

        <motion.p
          className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          저의 경험과 전문성을 활용하여 다음과 같은 분야에서 탁월한 결과를
          제공합니다. 각 서비스는 측정 가능한 성과를 보장합니다.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="mb-6 p-4 inline-flex items-center rounded-2xl bg-gray-700/50 gap-4">
                {service.icon}
                <h3 className="text-2xl font-bold text-gray-200">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* 주요 성과 섹션 추가 */}
              <div className="mt-auto">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">
                  주요 성과:
                </h4>
                <ul className="space-y-2">
                  {service.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center text-gray-400"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA 섹션 추가 */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-200 mb-4">
            프로젝트에 대해 논의하고 싶으신가요?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            위의 서비스는 프로젝트의 요구 사항에 맞게 맞춤화될 수 있습니다.
            자세한 내용은 메일로 문의해 주세요.
          </p>
          <a
            href="mailto:lwyeol1010@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 button-gradient rounded-full shadow-lg hover:shadow-xl relative overflow-hidden group"
          >
            <span className="relative z-10">문의하기</span>
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
