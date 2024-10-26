import { Metadata } from "next";
import { ClaimRoleCard } from "~~/components/dashboard/ClaimRoleCard";
import { DataRegistry } from "~~/components/dashboard/DataRegistry";
import MineralToken from "~~/components/dashboard/MineralToken";
import { SupplyChain } from "~~/components/dashboard/SupplyChain";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="w-full min-h-full flex justify-center  bg-neutral-400 shadow-2xl">
      <ClaimRoleCard />
      <DataRegistry />
      <MineralToken />
      <SupplyChain />
    </div>
  );
}

