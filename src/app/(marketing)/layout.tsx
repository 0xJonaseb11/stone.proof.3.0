import { MarketingLayout } from "@/components/layout";

export default function MarketingRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MarketingLayout>
      <main>{children}</main>
    </MarketingLayout>
  );
}
