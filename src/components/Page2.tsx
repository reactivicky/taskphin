import { useState } from "react";
import FormInput from "../common/FormInput";
import Button from "../common/Button";
import RadioGroup from "../common/RadioGroup";

interface Page2Props {
  closeModal: () => void;
}

const Page2 = ({ closeModal }: Page2Props) => {
  const [currentRadioValue, setCurrentRadioValue] = useState<number>(0);

  const handleNextClick = () => {
    closeModal();
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
        Save
      </Button>
    </>
  );
};

export default Page2;
