"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { SolutionsNav } from "./navigation/solution-nav";

export const Header: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (!inView) {
      window.scroll({ behavior: "smooth", top: 0 });
    }
  }, []);

  return (
    <header className="flex w-auto h-full px-4 justify-around py-8 items-center">
      <Link href={`/`}>
        <Image
          ref={ref}
          src={`/logo_dark.svg`}
          alt="Stoneproof"
          width={160}
          height={52}
        />
      </Link>
      <div className="flex flex-1 gap-4 justify-center">
        <Link href={`/#solutions`}>Solutions</Link>
        <Link href={`/#protocols`}>Protocols</Link>
        <Link href={`/#token`}>Token</Link>
      </div>
      <div>
        <button className="group bg-white px-6 py-2 hover:bg-neutral-100 text-neutral-900 rounded-full flex gap-4 items-center shadow">
          Connect a wallet
          <ArrowRight className="group-hover:translate-x-2 transition-all h-5" />
        </button>
      </div>
    </header>
  );
};
