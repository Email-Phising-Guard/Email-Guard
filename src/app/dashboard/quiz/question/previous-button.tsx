import { Button } from "@/components/ui/button";
import Link from "next/link";

type PreviousButtonProps = {
  prevQuestion: number;
};
export default function PreviousButton({ prevQuestion }: PreviousButtonProps) {
  return (
    <Link href={`/dashboard/quiz/question/${prevQuestion}`}>
      <Button variant="secondary" className="w-full py-8 text-3xl">
        Previous
      </Button>
    </Link>
  );
}
