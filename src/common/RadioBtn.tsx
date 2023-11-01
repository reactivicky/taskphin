interface RadioBtnProps {
  index: number;
  selectedIndex?: number;

  onSelect: (index: number) => void;

  children: React.ReactNode;
}
const RadioBtn = ({
  index,
  selectedIndex,
  onSelect,
  children,
}: RadioBtnProps) => {
  const isSelected = index === selectedIndex;
  return (
    <div
      className="flex items-center gap-radioInputGap cursor-pointer text-placeholder"
      onClick={() => onSelect(index)}
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
