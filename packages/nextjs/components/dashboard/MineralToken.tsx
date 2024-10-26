"use client";

import React, { ChangeEvent, useState } from "react";
// Import ABI correctly
import MineralTokenABI from "../../contracts/MineralToken.json";
import { Contract, ethers, providers } from "ethers";

interface ClaimRoleCardProps {
  contractAddress?: string;
}

const mineralTokenAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

const ClaimRoleCard: React.FC<ClaimRoleCardProps> = ({ contractAddress = mineralTokenAddress }) => {
  // State hooks with proper types
  const [role, setRole] = useState<string>("");
  const [account, setAccount] = useState<string>("");
  const [statusMessage, setStatusMessage] = useState<string>("");

  // Helper function to get the contract instance
  const getContract = (): Contract => {
    const provider = new providers.Web3Provider(window.ethereum as any);
    const signer = provider.getSigner();

    return new ethers.Contract(contractAddress, MineralTokenABI.abi, signer);
  };

  // Grant role function
  const handleGrantRole = async () => {
    try {
      const contract = getContract();
      const tx = await contract.grantRole(ethers.utils.formatBytes32String(role), account);
      setStatusMessage(`Transaction submitted: ${tx.hash}`);
      await tx.wait();
      setStatusMessage(`Transaction confirmed: ${tx.hash}`);
    } catch (error: any) {
      setStatusMessage(`Error: ${error.message}`);
    }
  };

  // Revoke role function
  const handleRevokeRole = async () => {
    try {
      const contract = getContract();
      const tx = await contract.revokeRole(ethers.utils.formatBytes32String(role), account);
      setStatusMessage(`Transaction submitted: ${tx.hash}`);
      await tx.wait();
      setStatusMessage(`Transaction confirmed: ${tx.hash}`);
    } catch (error: any) {
      setStatusMessage(`Error: ${error.message}`);
    }
  };

  // Handle input changes with reusable setter function
  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) => (event: ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  return (
    <div className="flex flex-col max-w-72 gap-4 bg-neutral-100 px-12 py-16 rounded-xl shadow mr-10">
      <h3 className="text-2xl text-center text-neutral-800">Manage Roles</h3>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Role (bytes32)"
          value={role}
          onChange={handleChange(setRole)}
          className="border rounded p-2"
        />
        <input
          type="text"
          placeholder="Account Address"
          value={account}
          onChange={handleChange(setAccount)}
          className="border rounded p-2"
        />
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleGrantRole}
          className="bg-green-500 hover:bg-green-600 transition-all text-white py-2 px-4 rounded-lg"
        >
          Grant Role
        </button>
        <button
          onClick={handleRevokeRole}
          className="bg-red-500 hover:bg-red-600 transition-all text-white py-2 px-4 rounded-lg"
        >
          Revoke Role
        </button>
      </div>
      {statusMessage && <p className="text-center text-neutral-600">{statusMessage}</p>}
    </div>
  );
};

export default ClaimRoleCard;
