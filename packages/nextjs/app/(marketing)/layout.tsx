"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { MarketingLayout } from "~~/components/layout";

export default function MarketingRootLayout({ children }: { children: React.ReactNode }) {
  const { address: connectedAddress } = useAccount();
  const { replace } = useRouter();

  useEffect(() => {
    if (connectedAddress) {
      replace("/dashboard");
    }
  }, [replace, connectedAddress]);

  return (
    <MarketingLayout>
      <main>{children}</main>
    </MarketingLayout>
  );
}
