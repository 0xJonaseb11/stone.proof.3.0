/* eslint-disable prettier/prettier */
"use client";

import { useState, useEffect } from "react";
import { Address } from "viem";
import { useAccount, useDisconnect } from "wagmi";
import { Balance } from "~~/components/scaffold-eth";
import { AddressInput } from "~~/components/scaffold-eth";
import { AddressInfoDropdown } from "~~/components/scaffold-eth/RainbowKitCustomConnectButton/AddressInfoDropdown";
import { AddressQRCodeModal } from "~~/components/scaffold-eth/RainbowKitCustomConnectButton/AddressQRCodeModal";

// Helper function to validate Ethereum addresses
const isValidAddress = (addr: string): boolean => {
  return /^(0x)?[0-9a-fA-F]{40}$/.test(addr);
};

export const AccountPageClient: React.FC = () => {
  const { address: connectedAddress } = useAccount();
  const { disconnect } = useDisconnect();
  const [address, setAddress] = useState<string>("");

  // Effect to handle connected address initialization
  useEffect(() => {
    if (connectedAddress && isValidAddress(connectedAddress)) {
      setAddress(connectedAddress);
    }
  }, [connectedAddress]);

  const handleAddressChange = (newAddress: string) => {
    if (isValidAddress(newAddress)) {
      setAddress(newAddress);
    } else {
      // Optionally handle invalid address case
      console.error("Invalid address");
    }
  };

  return (
    <div>
      <AddressInput 
        onChange={handleAddressChange} 
        value={address} 
        placeholder="Input your address" 
      />
      <AddressQRCodeModal address={connectedAddress as Address} modalId="qr-code-modal" />
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
      <AddressInfoDropdown 
        blockExplorerAddressLink="" // Provide a valid link if available
        displayName="" // Provide a valid display name if available
        address={connectedAddress as Address} 
      />
    </div>
  );
};
