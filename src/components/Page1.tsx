import { type Dispatch, type SetStateAction, useContext } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../common/FormInput";
import Button from "../common/Button";
import FormContext, { FormValues } from "../Context";

interface Page1Props {
  setPage: Dispatch<SetStateAction<number>>;
}

const Page1 = ({ setPage }: Page1Props) => {
  const { setFormState } = useContext(FormContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      job_title: "",
      company_name: "",
      industry: "",
      location: "",
      remote_type: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setFormState(data);
    setPage(2);
  };

  return (
    <form
      className="flex flex-col gap-formGap grow"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        id="job_title"
        labelName="Job title"
        placeholder="ex. UX UI Designer"
        register={register}
        hasError={Object.hasOwn(errors, "job_title")}
        errorText={errors["job_title"]?.message as string}
        required
      />
      <FormInput
        id="company_name"
        labelName="Company name"
        placeholder="ex. Google"
        register={register}
        hasError={Object.hasOwn(errors, "company_name")}
        errorText={errors["company_name"]?.message as string}
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
          id="remote_type"
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
