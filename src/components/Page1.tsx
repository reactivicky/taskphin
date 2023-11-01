import { type Dispatch, type SetStateAction } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../common/FormInput";
import Button from "../common/Button";

interface Page1Props {
  setPage: Dispatch<SetStateAction<number>>;
}

const Page1 = ({ setPage }: Page1Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-formGap grow"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        id="job-title"
        labelName="Job title"
        placeholder="ex. UX UI Designer"
        register={register}
        hasError={Object.hasOwn(errors, "job-title")}
        errorText={errors["job-title"]?.message as string}
        required
      />
      <FormInput
        id="company-name"
        labelName="Company name"
        placeholder="ex. Google"
        register={register}
        hasError={Object.hasOwn(errors, "company-name")}
        errorText={errors["company-name"]?.message as string}
        required
      />
      <FormInput
        id="industry"
        labelName="Industry"
        placeholder="ex. Information Technology"
        register={register}
        hasError={Object.hasOwn(errors, "industry")}
        errorText={errors["industry"]?.message as string}
        required
      />
      <div className="grid grid-cols-2 gap-formInputsGap">
        <FormInput
          id="location"
          labelName="Location"
          placeholder="ex. Chennai"
          register={register}
        />
        <FormInput
          id="remote-type"
          labelName="Remote type"
          placeholder="ex. In-office"
          register={register}
        />
      </div>
      <Button type="primary" classes="self-end mt-auto" submitBtn>
        Next
      </Button>
    </form>
  );
};

export default Page1;
