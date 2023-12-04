import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { questions } from "@/db/questions";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import MutipleChoiceSection from "./mutiple-choice-section";
import Navbar from "@/components/navbar";
import { LucideMailQuestion } from "lucide-react";
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
    <>
      <Navbar type="home" />
      <MaxWidthWrapper>
        <div className="my-5 flex items-baseline gap-2">
          <LucideMailQuestion size={32} />
          <h1 className="text-2xl font-bold">Question {question.id}</h1>
          <span className="font-semibold text-gray-500">
            out of {totalQuestions}
          </span>
        </div>
        <p className="my-5">{question.question}</p>
        {question.image && (
          <Link href={`/question/q${question.id}.png`} target="_blank">
            <Image
              src={question.image}
              className="mx-auto"
              alt={`Image for question ${question.id}`}
              width={1280}
              height={1280}
            />
          </Link>
        )}
        <MutipleChoiceSection question={question} />
      </MaxWidthWrapper>
    </>
  );
}
