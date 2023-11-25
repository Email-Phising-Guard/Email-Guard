import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
type MultipleChoiceItemProps = {
  option: string;
  i: number;
};
export default function MultipleChoiceItem({
  option,
  i,
}: MultipleChoiceItemProps) {
  return (
    <div className="flex w-full max-w-xl items-center space-x-8 rounded-lg border px-5">
      <RadioGroupItem defaultChecked value={i} id={`a${i}`} />
      <Label className="text-md w-full py-5" htmlFor={`a${i}`}>
        {option}
      </Label>
    </div>
  );
}
