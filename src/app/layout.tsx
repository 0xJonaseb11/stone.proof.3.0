import { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import { Providers } from "./providers"

export const metadata: Metadata = {
    title: "Stoneproof",
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
