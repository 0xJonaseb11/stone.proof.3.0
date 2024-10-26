import { Metadata } from "next";
import { ClaimRoleCard } from "~~/components/dashboard/ClaimRoleCard";

export const metadata: Metadata = {
  title: "Welcome abroad!",
};
export default function OnBoadingPage() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <ClaimRoleCard />
    </div>
  );
}
