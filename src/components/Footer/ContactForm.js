import { Formik, Form } from "formik";

import { Grid } from "@mui/material";
import * as Yup from "yup";
import TextField from "./TextFieldWrapper";
import Button from "./ContactBtn";
import "./ContactForm.css";

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  message: "",
};

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required("Please fill out field"),
  email: Yup.string()
    .email("Invalid E-Mail Address")
    .required("Please fill out field"),
  message: Yup.string()
    .min(7, "More details are always helpful.")
    .required("Please fill out field"),
});

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        ...INITIAL_FORM_STATE,
      }}
      validationSchema={FORM_VALIDATION}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <Grid container spacing={4}>
          <Grid item xs={11}>
            <TextField name="name" label="Name" />
          </Grid>

          <Grid item xs={11}>
            <TextField name="email" label="E-Mail" />
          </Grid>

          <Grid item xs={11}>
            <TextField multiline rows={6} name="message" label="Message" />
          </Grid>
          <Grid item xs={11}>
            <Button>Send</Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

export default ContactForm;
