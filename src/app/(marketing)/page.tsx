"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="sm:py-28 py-10 sm:px-12">
      <div>
        <h2 className="text-4xl font-medium">Trust, Unlocked.</h2>
        <div
          className="grid grid-cols-2 mt-12"
          style={{ gridTemplateRows: "300px 300px" }}
        >
          <div className="flex flex-col justify-end p-8 rounded-xl relative">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 268 150"
              initial={{ opacity: 0.9, scale: 1 }}
              animate={{
                opacity: [0.9, 1, 0.9],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute top-0 right-0`}
            >
              <circle cx="70" cy="40" r="40" fill="#FF5722" />
              <circle cx="130" cy="40" r="40" fill="#FF8A65" />
            </motion.svg>
            <p>Swap</p>
            <p>Swap any ERC-20, even those borrowed or supplied.</p>
          </div>
          <div className="p-8">
            <p>Stake</p>
            <p>Earn rewards for securing the protocol</p>
          </div>
          <div className="p-8">
            <p>Health factor</p>
            <p>Easily track the risk level of your borrow positions.</p>
          </div>
          <div className="p-8">
            <p>Multi-Network</p>
            <p>Deployable on any EVM compatible network.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
