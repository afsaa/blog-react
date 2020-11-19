import React, { useState } from "react";
import { connect } from "react-redux";
import { registerRequest } from "../actions";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import {
  Button,
  LinearProgress,
  Link,
  MenuItem,
  InputLabel,
  FormControl,
  Snackbar,
} from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Select } from "formik-material-ui";
import { registerAxiosRequest } from "../api";

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(2),
            width: 175
        }
    }
}));

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface NewUser {
  name: string;
  email: string;
  password: string;
  phone_number?: number;
  user_type: string;
}

const Register = (props: any) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
      <section className="register">
          <div className="register__container">
              <h2>Regístrate</h2>
              <Formik
                  initialValues={{
                      name: "",
                      email: "",
                      password: "",
                      phone_number: "",
                      user_type: "Usuario"
                  }}
                  validate={values => {
                      const errors: Partial<NewUser> = {};
                      if (!values.name) {
                          errors.name = "Campo Requerido";
                      }
                      if (!values.email) {
                          errors.email = "Campo Requerido";
                      } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                              values.email
                          )
                      ) {
                          errors.email = "Correo electrónico inválido";
                      }
                      if (!values.password) {
                          errors.password = "Campo Requerido";
                      }
                      return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                      registerAxiosRequest(values)
                          .then(result => {
                              setSubmitting(false);
                              handleOpen();
                              console.log(result.data);
                          })
                          .catch(err => {
                              setSubmitting(false);
                              console.log(err.message);
                          });
                      // props.registerRequest(values);
                  }}
              >
                  {({ submitForm, isSubmitting }) => (
                      <Form className={classes.root}>
                          <Field
                              component={TextField}
                              type="name"
                              name="name"
                              label="Nombre"
                              size="medium"
                          />
                          <br />
                          <Field
                              component={TextField}
                              type="email"
                              name="email"
                              label="Correo"
                              placeholder="carlos@gmail.com"
                              size="medium"
                          />
                          <br />
                          <Field
                              component={TextField}
                              type="password"
                              name="password"
                              label="Contraseña"
                              size="medium"
                          />
                          <br />
                          <Field
                              component={TextField}
                              type="tel"
                              name="phone_number"
                              label="Teléfono Celular"
                              size="medium"
                              placeholder="3157895677"
                          />
                          <br />
                          <FormControl>
                              <InputLabel htmlFor="user-type">
                                  Tipo de Usuario
                              </InputLabel>
                              <Field
                                  component={Select}
                                  name="user_type"
                                  size="medium"
                                  inputProps={{
                                      id: "user-type"
                                  }}
                              >
                                  <MenuItem value={"Usuario"}>Usuario</MenuItem>
                                  <MenuItem value={"Administrador"}>
                                      Administrador
                                  </MenuItem>
                              </Field>
                          </FormControl>
                          {isSubmitting && <LinearProgress />}
                          <br />
                          <Button
                              variant="contained"
                              color="primary"
                              size="medium"
                              disabled={isSubmitting}
                              onClick={submitForm}
                          >
                              Registrarme
                          </Button>
                      </Form>
                  )}
              </Formik>
              <p className="register__container--login-link">
                  <Link href="#" onClick={() => history.push("/login")}>
                      Iniciar sesión
                  </Link>
              </p>
          </div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                  Usuario creado correctamente. Ya puedes iniciar sesión.
              </Alert>
          </Snackbar>
      </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
