import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { loginRequest } from "../actions";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress, Link, Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "formik-material-ui";
import { loginAxiosRequest } from "../api";

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(2),
            width: 200
        }
    }
}));

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = (props: any) => {
    const classes = useStyles();
    const { loginRequest, token } = props;
    const history = useHistory();
    const [open, setOpen] = useState(false);
    let location = useLocation();
    let { from }: { from?: any } = location.state || {
        from: { pathname: "/" },
    };

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

    interface User {
        email: string;
        password: string;
    }

    if (token) {
        history.replace(from);
    }

    return (
        <section className="login">
            <div className="login__container">
                <h2>Inicio de Sesión</h2>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validate={values => {
                        const errors: Partial<User> = {};
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
                        loginAxiosRequest(values)
                            .then(result => {
                                setSubmitting(false);
                                loginRequest(result.data.token);
                                history.push("/");
                            })
                            .catch(err => {
                                setSubmitting(false);
                                handleOpen();
                            });
                    }}
                >
                    {({ submitForm, isSubmitting }) => (
                        <Form className={classes.root}>
                            <Field
                                component={TextField}
                                type="email"
                                name="email"
                                label="Correo"
                                size="normal"
                            />
                            <br />
                            <Field
                                component={TextField}
                                type="password"
                                name="password"
                                label="Contraseña"
                                size="normal"
                            />
                            {isSubmitting && <LinearProgress />}
                            <br />
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                                onClick={submitForm}
                            >
                                Iniciar Sesión
                            </Button>
                            <div className="login__container--remember-me">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        id="checkbox1"
                                        value="checkbox"
                                    />
                                    Recuérdame
                                </label>
                                <br />
                                <Link
                                    href="#"
                                    onClick={() => history.push("/")}
                                >
                                    Olvidé mi contraseña
                                </Link>
                            </div>
                        </Form>
                    )}
                </Formik>
                <p className="login__container--register">
                    Todavía no tienes una cuenta?
                    <Link href="#" onClick={() => history.push("/register")}>
                        Registrate!
                    </Link>
                </p>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Credenciales inválidas. Por favor intentalo de nuevo.
                </Alert>
            </Snackbar>
        </section>
    );
};

const mapStateToProps = (state: any) => {
    return {
        token: state.token,
    };
};

const mapDispatchToProps = {
    loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
