"use client";

import { motion } from "framer-motion";

const AnimatedCircles = () => {
  return (
    <motion.svg
      width="268"
      height="150"
      viewBox="0 0 268 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 right-0 rounded-tr-2xl"
    >
      <g style={{ transformOrigin: "147px 0px" }}>
        {/* First Set of Circles */}
        <motion.g
          style={{ transformOrigin: "147px 0px" }}
          animate={{ scale: [1, 0.92, 1] }} // Smooth pulsation effect
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <circle mask="url(#defi-stake-circle-mask-1)" cx="147" r="147" fill="#DFF6FF" />
          <circle mask="url(#defi-stake-circle-mask-2)" cx="147" r="147" fill="#6BCEF5" />
        </motion.g>

        {/* Second Set of Circles */}
        <motion.g
          style={{ transformOrigin: "147px 0px" }}
          animate={{ scale: [1, 0.94, 1] }} // Smaller scaling effect
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <circle mask="url(#defi-stake-circle-mask-1)" cx="147" r="121" fill="#6BCEF5" />
          <circle mask="url(#defi-stake-circle-mask-2)" cx="147" r="121" fill="#B5E7FA" />
        </motion.g>

        {/* Third Set of Circles */}
        <motion.g
          style={{ transformOrigin: "147px 0px" }}
          animate={{ scale: [1, 0.97, 1] }} // Minimal pulsation effect
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <circle mask="url(#defi-stake-circle-mask-1)" cx="147" r="71" fill="#DFF6FF" />
          <circle mask="url(#defi-stake-circle-mask-2)" cx="147" r="71" fill="#6BCEF5" />
        </motion.g>
      </g>

      {/* Masks */}
      <defs>
        <mask id="defi-stake-circle-mask-1">
          <rect y="-147" width="147" height="294" fill="white" />
        </mask>
        <mask id="defi-stake-circle-mask-2">
          <rect x="147" y="-147" width="147" height="294" fill="white" />
        </mask>
      </defs>
    </motion.svg>
  );
};

export default AnimatedCircles;
