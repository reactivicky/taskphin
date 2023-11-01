import {
  type Dispatch,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import FormInput from "../common/FormInput";
import Button from "../common/Button";
import FormContext, { FormValues } from "../Context";
import instance from "../api/axiosInstance";
import { type CardData } from "../data";

interface Page1Props {
  setPage: Dispatch<SetStateAction<number>>;
  selectedJob: string | null;
}

const Page1 = ({ setPage, selectedJob }: Page1Props) => {
  const { setFormState } = useContext(FormContext);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
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

  useEffect(() => {
    const fetchJobData = async (id: string) => {
      try {
        setLoading(true);
        const res = await instance.get<CardData>(`/${id}`);
        const jobData = res.data;
        reset(jobData);
        setFormState(jobData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    if (selectedJob) {
      fetchJobData(selectedJob);
    }
  }, [reset, selectedJob, setFormState]);

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
      <Button
        disabled={loading}
        type="primary"
        classes="self-end mt-auto"
        submitBtn
      >
        Next
      </Button>
    </form>
  );
};

export default Page1;
