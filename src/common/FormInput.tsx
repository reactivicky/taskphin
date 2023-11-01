import { type UseFormRegister } from "react-hook-form";
import { FormValues } from "../components/Page1";

interface FormInputProps {
  id: string;
  register: UseFormRegister<FormValues>;
  labelName?: string;
  placeholder: string;
  required?: boolean;
  classes?: string;
  hasError?: boolean;
  errorText?: string;
}

const FormInput = ({
  id,
  labelName,
  placeholder,
  required = false,
  hasError = false,
  errorText = "",
  classes,
  register,
}: FormInputProps) => {
  return (
    <div className="flex flex-col gap-labelInputGap justify-end">
      {labelName && (
        <label
          htmlFor={id}
          className="text-formInputLabel font-formInputLabelWeight"
        >
          {labelName}
          {required && <span className="text-error">*</span>}
        </label>
      )}
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className={`text-formInput placeholder:text-placeholder border rounded-formInputBorderRadius border-solid border-cardBorder p-formInputPadding ${classes}`}
        {...register(id as any, {
          required: {
            value: required,
            message: `${labelName} is required`,
          },
        })}
      />
      {hasError && <p className="text-error text-formError">{errorText}</p>}
    </div>
  );
};

export default FormInput;
