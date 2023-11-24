import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function SingleQuizQuestionPage() {
  return (
    <main className="mx-auto mt-10 max-w-xs">
      <div className="my-5 flex items-baseline gap-2">
        <h1 className="text-2xl font-bold">Question 1</h1>
        <span className="font-semibold text-gray-500">out of 7</span>
      </div>
      <p className="mt-5">What is a red flag indicating a phishing email?</p>
      <section className="mt-10">
        <RadioGroup defaultValue="q1" className="max-w-xl gap-5">
          <div className="flex w-full max-w-xl items-center space-x-8 rounded-lg border pl-5">
            <RadioGroupItem defaultChecked value="1" id="a1" />
            <Label className="w-full py-5 text-xl" htmlFor="a1">
              Answer 1
            </Label>
          </div>
          <div className="flex w-full max-w-xl items-center space-x-8 rounded-lg border pl-5">
            <RadioGroupItem value="2" id="a2" />
            <Label className="w-full py-5 text-xl" htmlFor="a2">
              Answer 2
            </Label>
          </div>
          <div className="flex w-full max-w-xl items-center space-x-8 rounded-lg  border pl-5">
            <RadioGroupItem value="3" id="a3" />
            <Label className="w-full py-5 text-xl" htmlFor="a3">
              Answer 3
            </Label>
          </div>
          <div className="flex w-full max-w-xl items-center space-x-8 rounded-lg border pl-5">
            <RadioGroupItem value="4" id="a4" />
            <Label className="w-full py-5 text-xl" htmlFor="a4">
              Answer 4
            </Label>
          </div>
        </RadioGroup>
      </section>
    </main>
  );
}
