import { Footer } from "../footer";
import { Header } from "../header";
import { HeroSection } from "../marketing/hero-section";

export const MarketingLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="bg-[url('/static/background_big_animated.svg')] bg-cover h-auto w-full">
        <Header />
        <HeroSection />
      </div>
      {children}
      <Footer />
    </>
  );
};
