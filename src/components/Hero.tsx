import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-container section-gradient-1 min-h-screen pt-16"
    >
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 transition-all duration-500 ease-in-out">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              이우열
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-gradient">Front-end</span> Developer
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              사용자의 경험과 웹 애플리케이션의 성능 최적화를 최우선으로
              고민하는 프론트엔드 개발자입니다. Next.js와 TypeScript를 비롯한
              최신 웹 기술을 활용하여 사용자 중심의 서비스를 개발합니다.
            </motion.p>
            <motion.div
              className="flex justify-center lg:justify-start space-x-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {/* Social links with staggered animations */}
              {[
                {
                  href: "https://github.com/w00ye0l",
                  icon: <Github className="w-6 h-6 text-gray-300" />,
                  label: "GitHub Profile",
                },
                {
                  href: "#",
                  icon: <Linkedin className="w-6 h-6 text-gray-300" />,
                  label: "LinkedIn Profile",
                },
                {
                  href: "mailto:lwyeol1010@gmail.com",
                  icon: <Mail className="w-6 h-6 text-gray-300" />,
                  label: "Email Contact",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-full glass hover:bg-gray-700/60 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
            <motion.a
              href="/resume/이우열_이력서.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 button-gradient rounded-full shadow-lg hover:shadow-xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">이력서 보기</span>
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <ArrowDown className="w-4 h-4 relative z-10" />
            </motion.a>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl"
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 6, opacity: 0.3 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl"
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: -6, opacity: 0.3 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute inset-0 glass rounded-3xl flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div
                  className="text-6xl md:text-8xl font-bold text-gradient"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  WY
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="w-1 h-12 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"
          animate={{
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6],
            height: [48, 40, 48],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}
