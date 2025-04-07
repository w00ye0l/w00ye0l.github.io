import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "홈" },
  { id: "about", label: "소개" },
  { id: "experience", label: "경력" },
  { id: "skills", label: "기술" },
  { id: "services", label: "서비스" },
  { id: "education", label: "학력" },
  { id: "footer", label: "연락처" },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 50px 이상일 때 네비게이션 표시
      if (window.scrollY > 50) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }

      // 현재 활성 섹션 찾기
      const currentScrollPos = window.scrollY + 100; // 상단에서 100px 위치 기준

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const scrollTop = window.scrollY;
          const elementTop = top + scrollTop;
          const elementBottom = bottom + scrollTop;

          if (
            currentScrollPos >= elementTop &&
            currentScrollPos <= elementBottom
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <div className="mx-auto max-w-7xl py-4 px-4 w-fit">
            <motion.div
              className="bg-gray-900/70 backdrop-blur-md rounded-full border border-gray-700/50 shadow-lg overflow-hidden"
              initial={{ width: "auto" }}
              animate={{
                boxShadow:
                  "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)",
              }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex justify-center py-2 px-4">
                <ul className="flex space-x-1 sm:space-x-2 md:space-x-4 relative">
                  {sections.map(({ id, label }) => (
                    <motion.li key={id} className="relative">
                      <a
                        href={`#${id}`}
                        className={`px-3 py-2 sm:px-4 rounded-full text-sm transition-colors duration-300 inline-block ${
                          activeSection === id
                            ? "text-white font-medium"
                            : "text-gray-300 hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(id)?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                      >
                        {label}
                        {/* 각 메뉴 항목에 배경 인디케이터 배치 */}
                        {activeSection === id && (
                          <motion.div
                            className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/80 to-purple-600/80 rounded-full"
                            layoutId="activeSection"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
