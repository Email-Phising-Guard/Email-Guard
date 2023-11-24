import { Button } from "@/components/ui/button";

export default function StartQuizPage() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-xs flex-col justify-between">
      <div>
        <h1 className="mb-3 mt-20 w-[254px] text-primary">
          Test your knowledge
        </h1>
        <p className="mt-20">
          Ready to level up your email security game? Take the quiz now and
          become a vigilant defender of your online privacy!
        </p>
      </div>
      <div>
        <Button type="submit" className="my-20 w-full py-10 text-3xl">
          Start Quiz
        </Button>
      </div>
    </main>
  );
}
