import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="max-w-5xl mx-auto py-16 bg-gray-900 text-gray-400 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-200">이우열</h2>
          <p className="mb-6 max-w-md text-gray-500">
            프론트엔드 개발자로서 사용자의 경험과 웹 애플리케이션의 성능
            최적화를 최우선으로 고민합니다. 새로운 협업 기회나 문의사항이
            있으시면 언제든지 연락주세요.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/w00ye0l"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href="mailto:lwyeol1010@gmail.com"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5 text-gray-300" />
            </a>
          </div>
        </motion.div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-sm flex items-center justify-center">
            © {new Date().getFullYear()} 이우열. Made with{" "}
            <Heart className="w-4 h-4 text-red-500 mx-1" /> using React &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
