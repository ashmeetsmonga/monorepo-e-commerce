import { Metadata } from "next";
import HeroSection from "../components/HeroSection";
import NewArrivals from "../components/NewArrivals";

export const metadata: Metadata = {
  title: "Web - Turborepo Example",
};

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center">
      <HeroSection />
      <NewArrivals />
    </div>
  );
}
