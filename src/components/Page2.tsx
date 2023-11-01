import { useState, useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import FormInput from "../common/FormInput";
import Button from "../common/Button";
import RadioGroup from "../common/RadioGroup";
import FormContext, { FormValues } from "../Context";

interface Page2Props {
  closeModal: () => void;
}

const Page2 = ({ closeModal }: Page2Props) => {
  const [currentRadioValue, setCurrentRadioValue] = useState<number>(0);
  const { formState, setFormState } = useContext(FormContext);

  const { register, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      experience: {
        min: "",
        max: "",
      },
      salary: {
        max: "",
        min: "",
      },
      total_exployees: "",
      apply_type: "quick_apply",
    },
  });

  const handleRadioChange = (idx: number) => {
    setCurrentRadioValue(idx);
    setValue("apply_type", idx === 0 ? "quick_apply" : "external_apply");
  };

  const onSubmit = async (data: FormValues) => {
    const formData = { ...formState, ...data };
    try {
      await axios.post(
        `https://${
          import.meta.env.VITE_MOCK_API_SECRET
        }.mockapi.io/v1/api/jobs`,
        formData
      );
      setFormState(formData);
    } catch (error) {
      console.log(error);
    }
    closeModal();
  };

  return (
    <form
      className="flex flex-col gap-formGap grow"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-2 gap-formInputsGap">
        <FormInput
          id="experience.min"
          labelName="Experience"
          placeholder="Minimum"
          register={register}
        />
        <FormInput
          id="experience.max"
          placeholder="Maximum"
          register={register}
        />
      </div>
      <div className="grid grid-cols-2 gap-formInputsGap">
        <FormInput
          id="salary.min"
          labelName="Salary"
          placeholder="Minimum"
          register={register}
        />
        <FormInput id="salary.max" placeholder="Maximum" register={register} />
      </div>
      <FormInput
        id="total_employees"
        labelName="Total employee"
        placeholder="ex. 100"
        register={register}
      />
      <RadioGroup
        onChange={handleRadioChange}
        value={currentRadioValue}
        labelText="Apply type"
        options={[<span>Quick apply</span>, <span>External apply</span>]}
      />
      <Button type="primary" classes="self-end mt-auto" submitBtn>
        Save
      </Button>
    </form>
  );
};

export default Page2;
