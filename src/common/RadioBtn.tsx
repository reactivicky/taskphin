import { MouseEventHandler } from "react";

interface RadioBtnProps {
  value: string;
  selectedOption?: string;
  onSelect: MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
}
const RadioBtn = ({
  value,
  selectedOption,
  onSelect,
  children,
}: RadioBtnProps) => {
  const isSelected = value === selectedOption;
  return (
    <div
      className="flex items-center gap-radioInputGap cursor-pointer text-placeholder"
      onClick={onSelect}
    >
      <div
        className={`rounded-full w-radioWidth h-radioHeight border border-radioBorder transition ${
          isSelected && "border border-primary bg-sky-300"
        } `}
      ></div>
      {children}
    </div>
  );
};

export default RadioBtn;
