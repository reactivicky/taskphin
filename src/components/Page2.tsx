import { useState, type Dispatch, type SetStateAction } from "react";
import FormInput from "./FormInput";
import Button from "./Button";
import RadioGroup from "./RadioGroup";

interface Page1Props {
  setPage: Dispatch<SetStateAction<number>>;
}

const Page2 = ({ setPage }: Page1Props) => {
  const [currentRadioValue, setCurrentRadioValue] = useState<number>(0);

  const handleNextClick = () => {
    setPage(2);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-formInputsGap">
        <FormInput
          id="experience-min"
          labelName="Experience"
          placeholder="Minimum"
        />
        <FormInput id="experience-max" placeholder="Maximum" />
      </div>
      <div className="grid grid-cols-2 gap-formInputsGap">
        <FormInput id="salary-min" labelName="Salary" placeholder="Minimum" />
        <FormInput id="salary-max" placeholder="Maximum" />
      </div>
      <FormInput
        id="total-employee"
        labelName="Total employee"
        placeholder="ex. 100"
      />
      <RadioGroup
        onChange={(idx) => setCurrentRadioValue(idx)}
        value={currentRadioValue}
        labelText="Apply type"
        options={[<span>Quick apply</span>, <span>External apply</span>]}
      />
      <Button
        onClick={handleNextClick}
        type="primary"
        classes="self-end mt-auto"
      >
        Next
      </Button>
    </>
  );
};

export default Page2;
