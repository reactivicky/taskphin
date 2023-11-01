import { createContext, useState, type ReactNode } from "react";

export interface FormValues {
  job_title: string;
  company_name: string;
  industry: string;
  location: string;
  remote_type: string;
  experience: {
    min: string;
    max: string;
  };
  salary: {
    min: string;
    max: string;
  };
  total_employees: string;
  apply_type: "quick_apply" | "external_apply";
}

interface FormContextProviderProps {
  children: ReactNode;
}

const FormContext = createContext(
  {} as {
    formState: FormValues;
    setFormState: React.Dispatch<React.SetStateAction<FormValues>>;
  }
);

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [formState, setFormState] = useState({} as FormValues);

  return (
    <FormContext.Provider value={{ formState, setFormState }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
