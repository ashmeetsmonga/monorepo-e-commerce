import { Metadata } from "next";
import { Button, Card } from "ui";
import HeroSection from "../components/HeroSection";

export const metadata: Metadata = {
  title: "Web - Turborepo Example",
};

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />
    </div>
  );
}
