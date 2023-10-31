import { type Dispatch, type SetStateAction } from "react";
import FormInput from "./FormInput";
import Button from "./Button";

interface Page1Props {
  setPage: Dispatch<SetStateAction<number>>;
}

const Page1 = ({ setPage }: Page1Props) => {
  const handleNextClick = () => {
    setPage(2);
  };

  return (
    <>
      <FormInput
        id="job-title"
        labelName="Job title"
        placeholder="ex. UX UI Designer"
        required
      />
      <FormInput
        id="company-name"
        labelName="Company name"
        placeholder="ex. Google"
        required
      />
      <FormInput
        id="industry"
        labelName="Industry"
        placeholder="ex. Information Technology"
        required
      />
      <div className="grid grid-cols-2 gap-formInputsGap">
        <FormInput
          id="location"
          labelName="Location"
          placeholder="ex. Chennai"
        />
        <FormInput
          id="remote-type"
          labelName="Remote type"
          placeholder="ex. In-office"
        />
      </div>
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

export default Page1;
