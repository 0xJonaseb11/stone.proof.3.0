"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { ArrowRight, Menu } from "lucide-react";
import { useInView } from "react-intersection-observer";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (!inView) {
      window.scroll({ behavior: "smooth", top: 0 });
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className="flex w-auto h-full px-4 sm:justify-around justify-between sm:py-8 py-2 items-center">
      <Link href={`/`} className="sm:block hidden">
        <Image ref={ref} src={`/logo_dark.svg`} alt="Stoneproof" width={160} height={52} />
      </Link>
      <Link href={`/`} className="sm:hidden block">
        <Image ref={ref} src={`/logo_small.svg`} alt="Stoneproof" width={50} height={40} />
      </Link>
      <div className="sm:flex flex-1 gap-4 justify-center hidden">
        <Link href={`/#solutions`}>Solutions</Link>
        <Link href={`/#faq`}>FAQ</Link>
        <Link href={`/#about`}>About</Link>
      </div>
      <div>
        <button className="group hidden bg-white px-6 py-2 hover:bg-neutral-100 text-neutral-900 rounded-full sm:flex gap-4 items-center shadow">
          Connect a wallet
          <ArrowRight className="group-hover:translate-x-2 transition-all h-5" />
        </button>
        <Menu className="sm:hidden block h-6" onClick={toggleMenu} />
        <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
      </div>
    </header>
  );
};
