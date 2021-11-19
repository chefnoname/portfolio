import { TextField } from "@mui/material";
import { useField } from "formik";

const TextFieldWrapper = ({ name, ...otherProps }) => {
  const [field, mata] = useField(name);

  const textConfig = {
    ...field,
    ...otherProps,
    variant: "filled",
    InputLabelProps: { sx: { color: "white", borderRadius: "10px" } },
    inputProps: { sx: { color: "white" } },
    sx: { borderRadius: "5px", background: "#000" },
    fullWidth: true,
  };

  if (mata && mata.touched && mata.error) {
    textConfig.error = true;
    textConfig.helperText = mata.error;
  }

  return <TextField id="filled-basic" {...textConfig} />;
};

export default TextFieldWrapper;
