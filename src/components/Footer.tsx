import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section
      id="footer"
      className="px-6 py-20 pt-40 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <motion.h2
        className="container mx-auto text-sm text-gray-600 text-end"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        © 2025 Lee WooYeol. All rights reserved.
      </motion.h2>
    </section>
  );
}
