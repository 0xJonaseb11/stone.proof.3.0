"use client";

// @refresh reset
import React from "react";
import { Balance } from "../Balance";
import { WrongNetworkDropdown } from "./WrongNetworkDropdown";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ArrowRight } from "lucide-react";
import { Address } from "viem";
import { useNetworkColor } from "~~/hooks/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";

/**
 * Custom Wagmi Connect Button (watch balance + custom design)
 */
export const RainbowKitCustomConnectButton: React.FC<{ className?: string }> = ({ className }) => {
  const networkColor = useNetworkColor();
  const { targetNetwork } = useTargetNetwork();

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;

        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <button className={`${className}`} onClick={openConnectModal} type="button">
                    Connect Wallet
                    <ArrowRight className="group-hover:translate-x-2 transition-all h-5" />
                  </button>
                );
              }

              if (chain.unsupported || chain.id !== targetNetwork.id) {
                return <WrongNetworkDropdown />;
              }

              return (
                <>
                  <div className="flex flex-col items-center mr-1">
                    <Balance address={account.address as Address} className="min-h-0 h-auto" />
                    <span className="text-xs" style={{ color: networkColor }}>
                      {chain.name}
                    </span>
                  </div>
                  {/* <AddressInfoDropdown
                    address={account.address as Address}
                    displayName={account.displayName}
                    ensAvatar={account.ensAvatar}
                    blockExplorerAddressLink={blockExplorerAddressLink}
                  /> */}
                  {/* <AddressQRCodeModal address={account.address as Address} modalId="qrcode-modal" /> */}
                </>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};
