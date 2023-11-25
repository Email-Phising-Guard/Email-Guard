"use client";
import { useState } from "react";

import MultipleChoiceItem from "./mutiple-choice-item";
import { Question } from "@/db/questions";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";
import PreviousButton from "../previous-button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

type MutipleChoiceSectionProps = {
  question: Question;
};
export default function MutipleChoiceSection({
  question,
}: MutipleChoiceSectionProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const isCorrect = selectedOption === question.answer;

  return (
    <section className="mt-5">
      <RadioGroup defaultValue="q1" className="max-w-xl gap-5">
        {question.options.map((option, i) => (
          <MultipleChoiceItem
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            key={i}
            option={option}
            i={i}
          />
        ))}
      </RadioGroup>
      <div className="mt-5 flex w-full flex-col gap-3">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button type="submit" className="w-full py-8 text-3xl">
              Submit
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="flex items-center gap-5 text-3xl font-bold">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="stroke-success" size={34} />
                    <span>Correct</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="stroke-destructive" size={34} />
                    <span>Incorrect</span>
                  </>
                )}
              </AlertDialogTitle>
              <AlertDialogDescription className="py-5 text-left text-lg text-foreground">
                {isCorrect ? (
                  <>
                    You&apos;ve got it right! Keep up the good work in
                    identifying best practices for handling email phishing.
                  </>
                ) : (
                  <>
                    <p>
                      Oops! That&apos;s not the right answer. Don&apos;t worry
                      learning is a process.
                    </p>
                  </>
                )}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex w-full">
              {isCorrect ? (
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
              ) : (
                <AlertDialogCancel asChild>
                  <Button
                    variant="outline"
                    className="w-full border-primary py-8 text-3xl text-primary hover:bg-primary hover:text-white"
                  >
                    Try again
                  </Button>
                </AlertDialogCancel>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {question.id !== 1 && <PreviousButton prevQuestion={question.id - 1} />}
      </div>
    </section>
  );
}
