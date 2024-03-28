import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const ForgotPassword = () => {
  return (
    <>
      <Box
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "1rem",
          width: "400px",
        }}
      >
        <Formik
          initialValues={{ email: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Must be a valid email.")
              .required("Email is required."),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleSubmit, getFieldProps, touched, errors }) => (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Typography variant="h5" textAlign="center">
                Forgot password?
              </Typography>
              <Typography textAlign="center">
                {` Enter your email address below and we'll send you password reset
                OTP.`}
              </Typography>
              <FormControl>
                <TextField label="Email Address" {...getFieldProps("email")} />
                {touched.email && errors.email ? (
                  <FormHelperText error>{errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              <Button color="secondary" variant="contained" type="submit">
                send email
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default ForgotPassword;
