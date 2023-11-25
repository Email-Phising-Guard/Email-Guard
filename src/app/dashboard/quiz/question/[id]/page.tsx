import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { questions } from "@/db/questions";
import Link from "next/link";
import MultipleChoiceItem from "./mutiple-choice-item";
import PreviousButton from "../previous-button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CheckCircle2 } from "lucide-react";

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
    <main className="mx-auto my-5 max-w-sm">
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
          className="mx-auto"
          alt={`Image for question ${question.id}`}
          width={332}
          height={200}
        />
      )}
      <section className="mt-5">
        <RadioGroup defaultValue="q1" className="max-w-xl gap-5">
          {question.options.map((option, i) => (
            <MultipleChoiceItem key={i} option={option} i={i} />
          ))}
        </RadioGroup>
        <div className="mt-5 flex w-full flex-col gap-3">
          <AlertDialog>
            <AlertDialogTrigger>
              <Button type="submit" className="w-full py-8 text-3xl">
                Submit
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center gap-5 text-3xl font-bold">
                  <CheckCircle2 className="stroke-success" size={34} />
                  <span>Correct Answer</span>
                </AlertDialogTitle>
                <AlertDialogDescription className="py-5 text-left text-lg text-foreground">
                  You&apos;ve got it right! Keep up the good work in identifying
                  best practices for handling email phishing.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="flex w-full">
                <Link
                  href={
                    question.id === 7
                      ? "/dashboard/quiz/complete"
                      : `/dashboard/quiz/question/${question.id + 1}`
                  }
                  className="w-full"
                >
                  <Button className="w-full py-8 text-3xl">Next</Button>
                </Link>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {question.id !== 1 && (
            <PreviousButton prevQuestion={question.id - 1} />
          )}
        </div>
      </section>
    </main>
  );
}
