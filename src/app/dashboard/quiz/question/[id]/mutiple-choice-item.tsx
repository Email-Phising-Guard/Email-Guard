import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Dispatch, SetStateAction } from "react";
type MultipleChoiceItemProps = {
  option: string;
  i: number;
  selectedOption: number | null;
  setSelectedOption: Dispatch<SetStateAction<number | null>>;
};
export default function MultipleChoiceItem({
  option,
  i,
  selectedOption,
  setSelectedOption,
}: MultipleChoiceItemProps) {
  const handleClick = () => {
    setSelectedOption(i);
  };
  return (
    <div
      onClick={handleClick}
      className="flex w-full max-w-xl items-center space-x-8 rounded-lg border px-5"
    >
      <RadioGroupItem
        checked={selectedOption == i}
        value={`${i}`}
        id={`a${i}`}
      />
      <Label className="text-md w-full py-5" htmlFor={`a${i}`}>
        {option}
      </Label>
    </div>
  );
}
