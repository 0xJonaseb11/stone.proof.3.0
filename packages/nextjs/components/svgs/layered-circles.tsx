"use client";

import { motion } from "framer-motion";

const LayeredCirclesAnimation = () => {
  return (
    <motion.svg
      width="237"
      height="169"
      viewBox="0 0 237 169"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 right-0 rounded-tr-2xl -z-10"
    >
      {/* Left Circle Group */}
      <motion.g
        style={{ transformOrigin: "65px 57.0001px" }}
        animate={{ x: [19.6117, 0, 19.6117] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M65 122C29.1015 122 0 92.8986 0 57.0001L130 57.0001C130 92.8986 100.899 122 65 122Z" fill="#9896FF" />
        <path
          d="M65 -7.99988C100.899 -7.99988 130 21.1016 130 57.0001L0 57.0001C0 21.1016 29.1015 -7.99988 65 -7.99988Z"
          fill="#E2E0FF"
        />
      </motion.g>

      {/* Middle Circle Group */}
      <motion.g
        style={{ transformOrigin: "158.286px 56.9998px" }}
        animate={{ x: [17.7784, 0, 17.7784] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M158.286 -35.8574C107.003 -35.8573 65.4289 5.71631 65.4289 57L251.144 57C251.144 5.7163 209.57 -35.8574 158.286 -35.8574Z"
          fill="#9896FF"
        />
        <path
          d="M158.286 149.857C209.57 149.857 251.143 108.284 251.143 57L65.4287 57C65.4287 108.284 107.002 149.857 158.286 149.857Z"
          fill="#BCBBFF"
        />
      </motion.g>

      {/* Right Circle Group */}
      <motion.g
        style={{ transformOrigin: "251px 57.0001px" }}
        animate={{ x: [14.4222, 0, 14.4222] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M251 169C312.856 169 363 118.856 363 57.0001L139 57.0001C139 118.856 189.144 169 251 169Z"
          fill="#9896FF"
        />
        <path
          d="M251 -54.9999C189.144 -54.9999 139 -4.85577 139 57.0001L363 57.0001C363 -4.85577 312.856 -54.9999 251 -54.9999Z"
          fill="#E2E0FF"
        />
      </motion.g>
    </motion.svg>
  );
};

export default LayeredCirclesAnimation;
