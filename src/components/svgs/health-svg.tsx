import React from "react";
import { motion } from "framer-motion";

export default function CreativeSvgIcon() {
  return (
    <motion.svg
      width="473"
      height="150"
      viewBox="0 0 473 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 right-0 rounded-tr-2xl"
    >
      <g transform="translate(0 -150)">
        {/* Floating Circles Group */}
        <motion.g
          style={{
            mixBlendMode: "multiply",
            transformOrigin: "323px 150px",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Create a pattern of circles */}
          {[0, 60, 120, 180, 240, 300].map((angle, index) => (
            <motion.circle
              key={angle}
              cx={323 + 80 * Math.cos((angle * Math.PI) / 180)}
              cy={150 + 80 * Math.sin((angle * Math.PI) / 180)}
              r="25"
              fill={index % 2 === 0 ? "#6366F1" : "#A5B4FC"}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.g>

        {/* Central Pattern */}
        <motion.g
          style={{
            mixBlendMode: "multiply",
            transformOrigin: "473px 150px",
          }}
        >
          {/* Petal-like shapes */}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <motion.path
              key={angle}
              d={`M 473 150 Q ${
                473 + 100 * Math.cos((angle * Math.PI) / 180)
              } ${150 + 100 * Math.sin((angle * Math.PI) / 180)} 473 ${
                150 + 100
              }`}
              stroke={angle % 120 === 0 ? "#818CF8" : "#C7D2FE"}
              strokeWidth="20"
              fill="none"
              animate={{
                strokeWidth: ["20", "30", "20"],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: angle / 60,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.g>

        {/* Center Circle */}
        <motion.circle
          cx="473"
          cy="150"
          r="40"
          fill="#4F46E5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </g>
    </motion.svg>
  );
}
