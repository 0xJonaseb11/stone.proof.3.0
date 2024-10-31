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
    <div className="w-full min-h-full flex justify-center bg-neutral-100 shadow-2xl">
      <div className="flex justify-center w-full ">
        <p>Welcome, Partner! Start by claiming a role!🤝</p>
      </div>
      <ClaimRoleCard />
      <DataRegistry />
      <MineralToken />
      <SupplyChain />
    </div>
  );
}
