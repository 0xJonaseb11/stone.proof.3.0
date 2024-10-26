"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { normalize } from "viem/ens";
import { useAccount, useEnsAvatar } from "wagmi";
import { BlockieAvatar } from "~~/components/scaffold-eth";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { replace } = useRouter();
  const { address: connectedAddress } = useAccount();
  const result = useEnsAvatar({
    name: normalize("wevm.eth"),
  });

  useEffect(() => {
    if (!connectedAddress) {
      replace("/");
    }
  }, [replace, connectedAddress]);

  return (
    <main className="w-full max-w-4xl mx-auto">
      <div className="py-5 flex justify-between">
        <Link href={`/`} className="sm:block hidden">
          <Image src={`/logo_dark.svg`} alt="Stoneproof" width={160} height={52} />
        </Link>
        <Link href={`/`} className="sm:hidden block">
          <Image src={`/logo_small.svg`} alt="Stoneproof" width={50} height={40} />
        </Link>
        <div>
          <BlockieAvatar address={connectedAddress || ""} size={36} ensImage={result.data} />
        </div>
      </div>
      {children}
    </main>
  );
}
