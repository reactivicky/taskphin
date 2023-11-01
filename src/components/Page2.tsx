import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../common/FormInput";
import Button from "../common/Button";
import RadioGroup from "../common/RadioGroup";
import FormContext, { FormValues } from "../Context";
import instance from "../api/axiosInstance";

interface Page2Props {
  closeModal: () => void;
  selectedJob: string | null;
}

export interface RadioOption {
  id: number;
  label: string;
  value: string;
}

const options: RadioOption[] = [
  {
    id: 1,
    label: "Quick apply",
    value: "quick_apply",
  },
  {
    id: 2,
    label: "External apply",
    value: "external_apply",
  },
];

const Page2 = ({ closeModal, selectedJob }: Page2Props) => {
  const { formState, setFormState } = useContext(FormContext);
  const [currentRadioValue, setCurrentRadioValue] = useState<string>(
    formState.apply_type ?? "quick_apply"
  );

  const { register, handleSubmit, setValue, reset } = useForm<FormValues>({
    defaultValues: {
      experience: {
        min: "",
        max: "",
      },
      salary: {
        max: "",
        min: "",
      },
      total_employees: "",
      apply_type: "quick_apply",
    },
  });

  useEffect(() => {
    const formData = { ...formState };
    if (!formData.apply_type) {
      formData.apply_type = "quick_apply";
    }
    reset(formData);
  }, [formState, reset]);

  const handleRadioChange = (val: string) => {
    setCurrentRadioValue(val);
    setValue("apply_type", val as "quick_apply" | "external_apply");
  };

  const onSubmit = async (data: any) => {
    const formData = { ...formState, ...data };
    try {
      if (selectedJob) {
        await instance.put(`/${selectedJob}`, formData);
        setFormState(formData);
      } else {
        await instance.post("/", formData);
        setFormState(formData);
      }
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
        options={options}
      />
      <Button type="primary" classes="self-end mt-auto" submitBtn>
        Save
      </Button>
    </form>
  );
};

export default Page2;
