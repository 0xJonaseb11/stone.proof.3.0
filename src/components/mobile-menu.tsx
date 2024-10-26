import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, LucidePlus } from "lucide-react"

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
    isOpen,
    onClose,
}) => {
    useEffect(() => {
        const handleEscape = (event: any) => {
            if (event.key === "Escape") {
                onClose()
            }
        }
        window.addEventListener("keydown", handleEscape)
        return () => {
            window.removeEventListener("keydown", handleEscape)
        }
    }, [onClose])

    if (!isOpen) return null

    const menuVariants = {
        hidden: { x: "100%" },
        visible: {
            x: 0,
            transition: { type: "spring", stiffness: 250, damping: 25 },
        },
        exit: {
            x: "100%",
            transition: { type: "spring", stiffness: 250, damping: 25 },
        },
    }

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50"
                onClick={onClose}
            />

            <motion.div
                className="relative w-full bg-white h-full shadow-lg"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
            >
                <button
                    className="absolute top-4 right-4 text-gray-600"
                    onClick={onClose}
                >
                    <LucidePlus className="transform rotate-45 h-8 w-8" />
                </button>
                <nav className="mt-16">
                    <ul className="flex flex-col gap-4 p-4">
                        <li>
                            <Link
                                href="/#solutions"
                                className="text-lg text-gray-800 hover:text-blue-500"
                            >
                                Solutions
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#about"
                                className="text-lg text-gray-800 hover:text-blue-500"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#faq"
                                className="text-lg text-gray-800 hover:text-blue-500"
                            >
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <button className="group text-lg text-neutral-900 rounded-full">
                                Connect a wallet
                            </button>
                        </li>
                    </ul>
                </nav>
            </motion.div>
        </div>,
        document.body
    )
}

export default MobileMenu
