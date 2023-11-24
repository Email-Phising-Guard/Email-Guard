import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashboardLinks = [
  { href: "/topic", label: "Explore Topics" },
  { href: "/quiz", label: "Start Quiz" },
];

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-md">
      <h1 className="mt-20 text-center">Dashboard</h1>
      <div className="mx-auto mt-32 flex w-full max-w-xs flex-col gap-5">
        {DashboardLinks.map(({ href, label }) => (
          <Link key={href} href={href}>
            <Button className="w-full py-10 text-2xl font-light">
              {label}
            </Button>
          </Link>
        ))}
      </div>
    </main>
  );
}
