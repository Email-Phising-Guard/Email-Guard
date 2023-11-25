"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

export default function BackButton() {
  const { back } = useRouter();
  return (
    <Button className="py-8" variant="ghost" onClick={back}>
      <ChevronLeft className="stroke-primary" size={34} />
    </Button>
  );
}
