import { Footer } from "../landing/footer";
import { Header } from "../landing/header";

export const MarketingLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
