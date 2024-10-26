"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const roles = [
  { label: "Refiner", role: "REFINER" },
  { label: "Miner", role: "MINER" },
  { label: "Transporter", role: "TRANSPORTER" },
  { label: "Auditor", role: "AUDITOR" },
  { label: "Inspector", role: "INSPECTOR" },
];

export const ClaimRoleCard: React.FC = () => {
  return (
    <div className="flex flex-col max-w-72 gap-4 bg-neutral-100 px-6 py-4 rounded-xl shadow">
      <p className="text-2xl text-center text-neutral-800">Congratulations!</p>
      <p className="text-center text-neutral-500">
        Claim a role that will be used to identify you in Stoneproof platform.
      </p>
      <Select>
        <SelectTrigger className="w-auto">
          <SelectValue placeholder="Role in chain" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {roles.map(role => (
            <SelectItem key={role.role} value={role.role}>
              {role.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <button className="bg-sky-400 hover:bg-sky-500 transition-all text-white py-2 px-6 rounded-lg">Continue</button>
    </div>
  );
};
