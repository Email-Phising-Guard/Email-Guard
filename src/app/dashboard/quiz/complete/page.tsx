import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CongratulationPage() {
  return (
    <main className="mx-auto flex max-w-xs flex-col justify-evenly">
      <h1 className="py-10 text-primary">Congratulations!</h1>
      <p className="mb-3">🎉🎉🎉</p>
      <h2 className="mb-5">
        Great Job! You&apos;ve Completed the Email Phishing Quiz!
      </h2>
      <div className="space-y-5">
        <p>Your commitment to online safety is commendable.</p>
        <p>
          Use this knowledge to navigate the digital world confidently. Stay
          vigilant, keep learning, and continue to be a cybersecurity champion!
        </p>
      </div>
      <Link href="/dashboard/quiz/">
        <Button type="submit" className="my-20 w-full py-10 text-3xl">
          Retry Quiz
        </Button>
      </Link>
    </main>
  );
}
