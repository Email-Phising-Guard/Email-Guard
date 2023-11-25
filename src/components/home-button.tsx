import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "./ui/button";

export default function HomeButton() {
  return (
    <Link href="/">
      <Button className="py-8" variant="ghost">
        <Home className="stroke-primary" size={34} />
      </Button>
    </Link>
  );
}
