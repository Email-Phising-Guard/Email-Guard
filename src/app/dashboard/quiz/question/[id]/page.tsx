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
          <h1 className="text-2xl font-bold">Question {question.id}</h1>
          <span className="font-semibold text-gray-500">
            out of {totalQuestions}
          </span>
        </div>
        <p className="my-5">{question.question}</p>
        {question.image && (
          <Dialog>
            <DialogTrigger asChild>
              <Image
                src={question.image}
                className="mx-auto"
                alt={`Image for question ${question.id}`}
                width={332}
                height={200}
              />
            </DialogTrigger>
            <DialogContent className="h-[600px] w-[500px]">
              <DialogHeader></DialogHeader>
              <Image
                src={question.image}
                className="mx-auto rotate-90"
                alt={`Image for question ${question.id}`}
                width={704}
                height={394}
              />
              <DialogFooter></DialogFooter>
            </DialogContent>
          </Dialog>
        )}
        <MutipleChoiceSection question={question} />
      </MaxWidthWrapper>
    </>
  );
}
