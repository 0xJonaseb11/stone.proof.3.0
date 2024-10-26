import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome abroad!",
};

export default function OnBoadingPage() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <p>Hello world</p>
    </div>
  );
}
