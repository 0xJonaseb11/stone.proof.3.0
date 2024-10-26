/* eslint-disable prettier/prettier */
"use client";
import { useState } from "react";
import { Address } from "viem";
import { useAccount, useDisconnect } from "wagmi";
import { Balance } from "~~/components/scaffold-eth";
import { AddressQRCodeModal } from "~~/components/scaffold-eth/RainbowKitCustomConnectButton/AddressQRCodeModal";
import { AddressInput } from "~~/components/scaffold-eth";
// import { Address } from "~~/components/scaffold-eth";

export const AccountPageClient: React.FC = () => {
  const { address: connectedAddress } = useAccount();
  const { disconnect } = useDisconnect();
  const [address, setAddress] = useState("");

  return (
    <div>
      <AddressInput onChange={setAddress} value={address} placeholder="Input your address" />
      <AddressQRCodeModal address={connectedAddress as Address} modalId="qr-code modal" />
      <div className="flex justify-center flex-col items-center">
        <p className="font-medium text-lg">Account Balance</p>
        <Balance address={connectedAddress as Address} />
        <button
          className="bg-red-500 py-2 px-4 m-3 rounded-xl text-white hover:bg-red-400"
          onClick={() => disconnect()}
        >
          Disconnect
        </button>
      </div>
    </div>
  );
};
