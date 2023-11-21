import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomeLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/quiz", label: "Quiz" },
  { href: "/about", label: "About" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center">
      <div className="mb-5 space-y-3 text-center">
        <h1 className="text-5xl font-bold">Email Guard</h1>
        <p className="italic">Ready to defend yourself?</p>
      </div>
      <div className="flex flex-col gap-2">
        {HomeLinks.map(({ href, label }) => (
          <Link key={href} href={href}>
            <Button className="w-full px-2 py-5 text-3xl">{label}</Button>
          </Link>
        ))}
      </div>
    </main>
  );
}
