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
    <main className="w-full max-w-4xl mx-auto sm:px-0 px-3">
      <div className="py-5 flex justify-between">
        <Link href={`/dashboard`} className="sm:block hidden">
          <Image src={`/logo_dark.svg`} alt="Stoneproof" width={160} height={52} />
        </Link>
        <Link href={`/dashboard`} className="sm:hidden block">
          <Image src={`/logo_small.svg`} alt="Stoneproof" width={50} height={40} />
        </Link>
        <div>
          <Link href={`/account`}>
            <BlockieAvatar address={connectedAddress || ""} size={36} ensImage={result.data} />
          </Link>
        </div>
      </div>
      {children}
    </main>
  );
}
