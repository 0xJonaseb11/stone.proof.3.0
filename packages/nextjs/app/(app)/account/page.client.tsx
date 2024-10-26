"use client";

import { Address } from "viem";
import { useAccount } from "wagmi";
import { Balance } from "~~/components/scaffold-eth";
import { AddressQRCodeModal } from "~~/components/scaffold-eth/RainbowKitCustomConnectButton/AddressQRCodeModal";

export const AccountPageClient: React.FC = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <div>
      <AddressQRCodeModal address={connectedAddress as Address} modalId="qr-code modal" />
      <div className="flex justify-center flex-col items-center">
        <p className="font-medium text-lg">Account Balance</p>
        <Balance address={connectedAddress as Address} />
      </div>
    </div>
  );
};
