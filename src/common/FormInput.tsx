interface FormInputProps {
  id: string;
  labelName?: string;
  placeholder: string;
  required?: boolean;
  classes?: string;
}

const FormInput = ({
  id,
  labelName,
  placeholder,
  required,
  classes,
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
      />
    </div>
  );
};

export default FormInput;
