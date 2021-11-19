import { Button } from "@mui/material";
import { useFormikContext } from "formik";

const ContactBtn = ({ children }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const buttonConfig = {
    variant: "contained",
    onClick: handleSubmit,
    fullWidth: true,
  };
  return <Button {...buttonConfig}>{children}</Button>;
};

export default ContactBtn;
