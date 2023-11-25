import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/nav/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const relativePath = "/dashboard";

const DashboardLinks = [
  { href: `${relativePath}/topic`, label: "Explore Topics" },
  { href: `${relativePath}/quiz`, label: "Start Quiz" },
];

export default function DashboardPage() {
  return (
    <>
      <Navbar type="back" />
      <MaxWidthWrapper>
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
      </MaxWidthWrapper>
    </>
  );
}
