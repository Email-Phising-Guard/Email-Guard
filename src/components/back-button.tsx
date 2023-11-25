"use client";

import { useRouter } from "next/router";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

export default function BackButton() {
  const { back } = useRouter();
  return (
    <Button variant="ghost" onClick={back}>
      <ChevronLeft />
    </Button>
  );
}
