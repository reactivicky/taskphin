import { useState } from "react";
import RadioBtn from "./RadioBtn";
import { type RadioOption } from "../components/Page2";

interface IProps {
  options: RadioOption[];
  onChange?: (value: string) => void;
  value?: string;
  labelText?: string;
}
const RadioGroup = ({ options, onChange, value, labelText }: IProps) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    value
  );
  const onSelect = (value: string) => {
    setSelectedOption(value);
    onChange && onChange(value);
  };
  return (
    <div className="flex flex-col gap-radioInputGap">
      {labelText && (
        <label className="text-formInputLabel font-formInputLabelWeight">
          {labelText}
        </label>
      )}
      <div className="flex gap-radioGap">
        {options.map(({ id, label, value }) => (
          <RadioBtn
            key={id}
            value={value}
            selectedOption={selectedOption}
            onSelect={() => onSelect(value)}
          >
            {label}
          </RadioBtn>
        ))}
      </div>
    </div>
  );
};
export default RadioGroup;
