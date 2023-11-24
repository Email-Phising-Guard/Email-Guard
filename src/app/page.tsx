import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomeLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/quiz", label: "Quiz" },
  { href: "/about", label: "About" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center">
      <div className="mb-5 space-y-3 text-center">
        <div className="flex justify-center">
          <Logo width={180.14} height={236.97} />
        </div>
        <h1 className="text-5xl font-bold">Email Guard</h1>
        <p className="mb-5 italic">Ready to defend yourself?</p>
      </div>
      <div className="mx-auto flex w-full max-w-xs flex-col gap-5">
        {HomeLinks.map(({ href, label }) => (
          <Link key={href} href={href}>
            <Button className="w-full py-8 text-3xl">{label}</Button>
          </Link>
        ))}
      </div>
    </main>
  );
}
