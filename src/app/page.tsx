import Logo from "@/components/logo";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomeLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/quiz", label: "Quiz" },
  { href: "/about", label: "About" },
];

export default function Home() {
  return (
    <>
      <Navbar type="settings" />
      <MaxWidthWrapper className="flex flex-col justify-evenly py-0">
        <div className="text-center">
          <div className="flex justify-center">
            <Logo width={170.14} height={200.97} />
          </div>
          <h1 className="pt-5 text-5xl font-bold">Email Guard</h1>
          <p className="mb-5 pt-5 italic">Ready to defend yourself?</p>
        </div>
        <div className="mx-auto flex w-full max-w-xs flex-col gap-5 pt-10">
          {HomeLinks.map(({ href, label }) => (
            <Link key={href} href={href}>
              <Button className="w-full py-8 text-3xl">{label}</Button>
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
}
