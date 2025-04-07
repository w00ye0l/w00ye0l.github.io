import { motion } from "framer-motion";

interface AnimatedSectionHeaderProps {
  title: string;
}

export default function AnimatedSectionHeader({
  title,
}: AnimatedSectionHeaderProps) {
  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="mb-20 text-center">
      <div className="inline-block relative">
        <h2 className="text-4xl font-bold overflow-hidden">
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              custom={i}
              variants={letterVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>
        <motion.span
          className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ width: 0, left: "50%" }}
          whileInView={{ width: "100%", left: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        />
        <motion.div
          className="absolute -inset-3 rounded-full opacity-0"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: [0, 1.2, 1], opacity: [0, 0.2, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>
    </div>
  );
}
