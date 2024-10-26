"use client"
import React from "react"
import { motion } from "framer-motion"

export default function SwapSvgIcon() {
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
                {/* Left Circle Group */}
                <motion.g
                    style={{
                        mixBlendMode: "multiply",
                        transformOrigin: "323px 150px",
                    }}
                    animate={{
                        scale: [1, 1.05, 1],
                        translateY: [-9.06063, -11.06063, -9.06063],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                >
                    <g id="Ellipse 3341">
                        <path
                            d="M323 9.15527e-05C240.157 0.000106037 173 67.1574 173 150C173 232.843 240.157 300 323 300L323 9.15527e-05Z"
                            fill="#FFD7B3"
                        />
                    </g>
                    <g id="Ellipse 7914">
                        <path
                            d="M323 -3.05176e-05C405.843 -1.60329e-05 473 67.1573 473 150C473 232.843 405.843 300 323 300L323 -3.05176e-05Z"
                            fill="#FF8947"
                        />
                    </g>
                </motion.g>

                {/* Right Circle Group */}
                <motion.g
                    style={{
                        mixBlendMode: "multiply",
                        transformOrigin: "473px 150px",
                    }}
                    animate={{
                        scale: [1, 1.05, 1],
                        translateY: [-4.12552, -6.12552, -4.12552],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                >
                    <g id="Ellipse 3341_2">
                        <path
                            d="M473 9.15527e-05C555.843 0.000106037 623 67.1574 623 150C623 232.843 555.843 300 473 300L473 9.15527e-05Z"
                            fill="#FFD7B3"
                        />
                    </g>
                    <g id="Ellipse 7914_2">
                        <path
                            d="M473 -3.05176e-05C390.157 -1.60329e-05 323 67.1573 323 150C323 232.843 390.157 300 473 300L473 -3.05176e-05Z"
                            fill="#FF8947"
                        />
                    </g>
                </motion.g>
            </g>
        </motion.svg>
    )
}
