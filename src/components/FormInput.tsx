interface FormInputProps {
  id: string;
  labelName: string;
  placeholder: string;
  required?: boolean;
}

const FormInput = ({
  id,
  labelName,
  placeholder,
  required,
}: FormInputProps) => {
  return (
    <div className="flex flex-col gap-labelInputGap">
      <label
        htmlFor={id}
        className="text-formInputLabel font-formInputLabelWeight"
      >
        {labelName}
        {required && <span className="text-error">*</span>}
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="text-formInput placeholder:text-placeholder border rounded-formInputBorderRadius border-solid border-cardBorder p-formInputPadding"
      />
    </div>
  );
};

export default FormInput;
