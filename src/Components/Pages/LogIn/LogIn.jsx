import React, { useMemo, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
    Box,
    FormHelperText,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from '@mui/material';

//ICON
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

//CUSTOM
import { LoginWrapper } from './Login.style';
import { PASSWORD_REGEX } from 'Helpers/Constants';
import Api from 'Helpers/ApiHandler';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from 'Components/Common/CustomBtn/CustomButton';
import { URL_RESET_PASSWORD, URL_SIGN_UP } from 'Helpers/Path';

const validationSchema = Yup.object({
    email: Yup.string()
        .required('Please enter your email address')
        .email('user-validation', 'Enter Valid email address'),
    password: Yup.string()
        .required('Please enter your password')
        .matches(
            PASSWORD_REGEX,
            'Password must contain one upper case, one lowercase, one special character, one digit and must be of 10 characters'
        )
});

const loginFormInitialValues = {
    email: '',
    password: ''
};

const LogIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const API = useMemo(() => new Api(), []);

    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const handleSubmit = async (values) => {
        console.log('handelSUbmit values', values);
    };

    return (
        <LoginWrapper className="flex f-h-center f-v-center">
            <Box className="login-screen flex f-column f-v-center">
                <Box className="heading flex f-v-center">
                    <Typography className="title">Login</Typography>
                </Box>
                <Formik
                    initialValues={loginFormInitialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}>
                    {({ values, errors, touched, handleChange, handleSubmit, setFieldValue }) => (
                        <Box className="login-field flex f-column">
                            <Box className="field-wrapper">
                                <TextField
                                    variant="outlined"
                                    name="email"
                                    className="input-field"
                                    placeholder="Email address"
                                    value={values?.email}
                                    onChange={handleChange}
                                    InputProps={{
                                        classes: {
                                            root: 'input-field-root',
                                            focused: 'input-focused',
                                            notchedOutline: 'input-outline'
                                        }
                                    }}
                                />
                                <FormHelperText error>
                                    {touched?.email && errors?.email}
                                </FormHelperText>
                            </Box>
                            <Box className="field-wrapper">
                                <TextField
                                    variant="outlined"
                                    className="input-field"
                                    name="password"
                                    placeholder="Password"
                                    type={passwordVisibility ? 'text' : 'password'}
                                    value={values?.password}
                                    onChange={handleChange}
                                    InputProps={{
                                        classes: {
                                            root: 'password-field-root',
                                            focused: 'input-focused',
                                            notchedOutline: 'input-outline'
                                        },
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() =>
                                                        setPasswordVisibility((prev) => !prev)
                                                    }>
                                                    {passwordVisibility ? (
                                                        <VisibilityIcon />
                                                    ) : (
                                                        <VisibilityOffIcon />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <FormHelperText error>
                                    {touched?.password && errors?.password}
                                </FormHelperText>
                            </Box>
                            <CustomButton
                                onClick={handleSubmit}
                                btnSize="btn-large"
                                btnRounder={true}>
                                Login
                            </CustomButton>
                            <Box className="msg-section flex f-v-center f-column">
                                <Typography
                                    className="password-msg"
                                    onClick={() => navigate(URL_RESET_PASSWORD)}>
                                    forgot password?
                                </Typography>
                                <Box className="sign-up-container flex">
                                    Don't have an account?{' '}
                                    <Box className="sign-up" onClick={() => navigate(URL_SIGN_UP)}>
                                        Sign Up
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    )}
                </Formik>
            </Box>
        </LoginWrapper>
    );
};

export default LogIn;
