import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email.").required("Required."),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("No password provided."),
});

const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("No password provided."),
  rePassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export { loginSchema, registerSchema };
