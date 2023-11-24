import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { questions } from "@/db/questions";
import Link from "next/link";

type SingleQuizQuestionPageProps = {
  params: {
    id: string;
  };
};

export default function SingleQuizQuestionPage({
  params,
}: SingleQuizQuestionPageProps) {
  const questionId = Number(params.id);
  const question = questions.find((question) => question.id === questionId);
  const totalQuestions = questions.length;
  if (!question) {
    return notFound();
  }
  return (
    <main className="mx-auto my-5 max-w-xs">
      <div className="my-5 flex items-baseline gap-2">
        <h1 className="text-2xl font-bold">Question {question.id}</h1>
        <span className="font-semibold text-gray-500">
          out of {totalQuestions}
        </span>
      </div>
      <p className="my-5">{question.question}</p>
      {question.image && (
        <Image
          src={question.image}
          alt={`Image for question ${question.id}`}
          width={332}
          height={200}
        />
      )}
      <section className="mt-5">
        <RadioGroup defaultValue="q1" className="max-w-xl gap-5">
          {question.options.map((option, i) => (
            <div
              key={i}
              className="flex w-full max-w-xl items-center space-x-8 rounded-lg border px-5"
            >
              <RadioGroupItem defaultChecked value={i} id={`a${i}`} />
              <Label className="text-md w-full py-5" htmlFor={`a${i}`}>
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
        <div className="mt-5 flex w-full flex-col gap-3">
          <Link
            href={
              question.id === 7
                ? "/dashboard/quiz/complete"
                : `/dashboard/quiz/question/${question.id + 1}`
            }
          >
            <Button type="submit" className="w-full py-8 text-3xl">
              Submit
            </Button>
          </Link>
          {question.id !== 1 && (
            <Link href={`/dashboard/quiz/question/${question.id - 1}`}>
              <Button variant="secondary" className="w-full py-8 text-3xl">
                Previous
              </Button>
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
