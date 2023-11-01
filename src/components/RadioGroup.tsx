import React, { useState } from "react";
import RadioBtn from "./RadioBtn";

interface IProps {
  options: React.ReactElement[];
  onChange?: (selectedIndex: number) => void;
  value?: number;
  labelText?: string;
}
const RadioGroup = ({ options, onChange, value, labelText }: IProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(value);
  function onSelect(index: number) {
    setSelectedIndex(index);
    onChange && onChange(index);
  }
  return (
    <div className="flex flex-col gap-radioInputGap">
      {labelText && (
        <label className="text-formInputLabel font-formInputLabelWeight">
          {labelText}
        </label>
      )}
      <div className="flex gap-radioGap">
        {options.map((el, index) => (
          <RadioBtn
            key={index}
            index={index}
            selectedIndex={selectedIndex}
            onSelect={(index) => onSelect(index)}
          >
            {el}
          </RadioBtn>
        ))}
      </div>
    </div>
  );
};
export default RadioGroup;
