import { AccountPageClient } from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Account" };

export default function AccountPage() {
  return (
    <div className="py-6 px-4">
      <AccountPageClient />
    </div>
  );
}
