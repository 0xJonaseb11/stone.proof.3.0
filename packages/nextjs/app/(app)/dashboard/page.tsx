import { Metadata } from "next";
import { ClaimRoleCard } from "~~/components/dashboard/ClaimRoleCard";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <ClaimRoleCard />
    </div>
  );
}
