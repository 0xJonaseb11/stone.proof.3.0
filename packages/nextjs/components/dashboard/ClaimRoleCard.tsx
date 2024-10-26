/* eslint-disable prettier/prettier */
"use client";

import { useState } from "react";
import { ethers } from "ethers";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import ParticipantsABI from "../../contracts/Participants.json"; 

type Role = {
  label: string;
  role: string;
};

const roles: Role[] = [
  { label: "Refiner", role: "REFINER" },
  { label: "Miner", role: "MINER" },
  { label: "Transporter", role: "TRANSPORTER" },
  { label: "Auditor", role: "AUDITOR" },
  { label: "Inspector", role: "INSPECTOR" },
];

export const ClaimRoleCard: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
  };

  const handleClaimRole = async (): Promise<void> => {
    if (!selectedRole) return;

    try {
      if (!window.ethereum) {
        alert("Please install MetaMask or any other EVM-wallet");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; 
      const contract = new ethers.Contract(
        contractAddress,
        ParticipantsABI.abi,
        signer
      );

      const roleBytes32 = ethers.utils.formatBytes32String(selectedRole);

      const tx = await contract.registerParticipant(
        await signer.getAddress(),
        "Participant's name",
        "Participant's location",
        roleBytes32
      );

      await tx.wait();
      alert("Role claimed successfully!");
    } catch (error: any) {
      console.error("Error claiming role:", error);
      alert("An error occurred while claiming the role.");
    }
  };

  return (
    <div className="flex flex-col max-w-72 gap-4 bg-neutral-100 px-12 py-16 rounded-xl shadow mr-10">
      <p className="text-2xl text-center text-neutral-800">Congratulations!</p>
      <p className="text-center text-neutral-500">
        Claim a role that will be used to identify you on the Stoneproof platform.
      </p>
      <Select onValueChange={handleRoleChange}>
        <SelectTrigger className="w-auto">
          <SelectValue placeholder="Role in chain" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {roles.map((role) => (
            <SelectItem key={role.role} value={role.role}>
              {role.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <button
        onClick={handleClaimRole}
        className="bg-sky-400 hover:bg-sky-500 transition-all text-white py-2 px-6 rounded-lg"
      >
        Continue
      </button>
    </div>
  );
};
