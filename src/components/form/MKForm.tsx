import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TPHForm = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};

const MKForm = ({ children, onSubmit }: TPHForm) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default MKForm;
