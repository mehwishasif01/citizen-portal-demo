import React from "react";
// import { Formik, Form, Field } from "formik";
// import { TextField } from "formik-mui";
import { Button, Container, Typography } from "@mui/material";
import * as Yup from "yup";

const ContactUsSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const ContactUsPage = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      {/* <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={ContactUsSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              component={TextField}
              name="name"
              label="Name"
              fullWidth
              margin="normal"
            />
            <Field
              component={TextField}
              name="email"
              label="Email"
              fullWidth
              margin="normal"
            />
            <Field
              component={TextField}
              name="message"
              label="Message"
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "1rem" }}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik> */}
    </Container>
  );
};

export default ContactUsPage;
