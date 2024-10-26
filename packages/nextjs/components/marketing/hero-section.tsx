"use client";

import Link from "next/link";
import { RainbowKitCustomConnectButton } from "../scaffold-eth";
import { ArrowRight, Lock } from "lucide-react";
import { useAccount } from "wagmi";

export const HeroSection: React.FC = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <div className="flex flex-col gap-4 pt-16 pb-5 justify-center w-full items-center">
      <Link
        href={`/innovation`}
        className="group sm:flex hidden justify-between gap-2 items-center cursor-pointer bg-white/70 max-w-[500px] px-3 py-2 rounded-full transition-all hover:shadow-md text-neutral-700"
      >
        <Lock className="h-4 w-4" />
        <p className="text-sm text-ellipsis text-center">Revolutioning mineral supply chain with using the Etherium!</p>
        <ArrowRight className="h-4 group-hover:translate-x-1 transition-all" />
      </Link>
      <div className="max-w-3xl text-center space-y-10 mt-12 mb-4">
        <h1 className="animate-fade-up capitalize bg-gradient-to-br text-4xl text-neutral-800 font-bold tracking-[-0.02em] [text-wrap:balance] text-center md:text-6xl md:leading-[1.1]">
          The Platform To Optimize Mineral Supply Chains
        </h1>
        <p className="text-neutral-700">
          Streamline your mineral supply chain operations with enhanced transparency, and secure transactions. Leverage
          blockchain technology to ensure efficiency and trust across the supply chain.
        </p>
      </div>
      <div>
        {!connectedAddress && (
          <RainbowKitCustomConnectButton className="group bg-sky-600 hover:bg-sky-500 px-6 py-3 text-white rounded-full flex gap-4 items-center" />
        )}
      </div>
      <div className="sm:flex hidden items-center justify-between text-center h-52 w-full backdrop-blur-md bg-white/40 border border-white max-w-4xl p-8 rounded-xl shadow-lg">
        <div>
          <h1 className="text-4xl">$43.63M</h1>
          <p className="font-medium">30 Day Volume</p>
        </div>
        <div>
          <h1 className="text-4xl">400T</h1>
          <p className="font-medium">Managed minerals</p>
        </div>
        <div>
          <h1 className="text-4xl">$159.73M</h1>
          <p className="font-medium">Yearly Revenue</p>
        </div>
      </div>
    </div>
  );
};
