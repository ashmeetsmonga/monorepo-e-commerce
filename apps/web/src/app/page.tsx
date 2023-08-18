import { Metadata } from "next";
import { Button, Card } from "ui";

export const metadata: Metadata = {
  title: "Web - Turborepo Example",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 lg:p-3">
      Home Page
    </div>
  );
}
