import React, { useMemo, useState } from 'react';
import {
    Box,
    FormHelperText,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//ICON
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { PASSWORD_REGEX } from 'Helpers/Constants';
import Api from 'Helpers/ApiHandler';
import CustomButton from 'Components/Common/CustomBtn/CustomButton';
import { SignUpWrapper } from './SignUp.style';
import { URL_LOGIN } from 'Helpers/Path';

const SignUpInitValue = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const validationSchema = Yup.object({
    firstName: Yup.string().required('Please enter first name'),
    lastName: Yup.string().required('Please enter last name'),
    email: Yup.string()
        .required('Please enter your email address')
        .email('user-validation', 'Enter Valid email address'),
    password: Yup.string()
        .required('Please enter your password')
        .matches(
            PASSWORD_REGEX,
            'Password must contain one upper case, one lowercase, one special character, one digit and must be of 10 characters'
        ),
    confirmPassword: Yup.string()
        .required('Please enter your password')
        .oneOf([Yup.ref('password'), null], 'Password Do not match')
});

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const API = useMemo(() => new Api(), []);

    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);

    const handleSubmit = async (values) => {
        console.log('handelSUbmit values', values);
    };

    return (
        <SignUpWrapper className="flex f-h-center f-v-center">
            <Box className="sign-up-screen flex f-column f-v-center">
                <Box className="heading flex f-v-center">
                    <Typography className="title">Sign up</Typography>
                </Box>
                <Formik
                    initialValues={SignUpInitValue}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}>
                    {({ values, errors, touched, handleChange, handleSubmit, setFieldValue }) => (
                        <Box className="sign-up-field flex f-column">
                            <Box className="user-name flex">
                                <Box className="field-wrapper">
                                    <TextField
                                        variant="outlined"
                                        name="firstName"
                                        className="input-field"
                                        placeholder="First Name"
                                        value={values?.firstName}
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
                                        {touched?.firstName && errors?.firstName}
                                    </FormHelperText>
                                </Box>
                                <Box className="field-wrapper">
                                    <TextField
                                        name="lastName"
                                        variant="outlined"
                                        className="input-field"
                                        placeholder="Last Name"
                                        value={values?.lastName}
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
                                        {touched?.lastName && errors?.lastName}
                                    </FormHelperText>
                                </Box>
                            </Box>
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
                            <Box className="field-wrapper">
                                <TextField
                                    variant="outlined"
                                    className="input-field"
                                    name="confirmPassword"
                                    placeholder="Confirm password"
                                    type={confirmPasswordVisibility ? 'text' : 'password'}
                                    value={values?.confirmPassword}
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
                                                        setConfirmPasswordVisibility(
                                                            (prev) => !prev
                                                        )
                                                    }>
                                                    {confirmPasswordVisibility ? (
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
                                    {touched?.confirmPassword && errors?.confirmPassword}
                                </FormHelperText>
                            </Box>
                            <CustomButton
                                btnSize="btn-large"
                                btnRounder={true}
                                onClick={handleSubmit}>
                                Create Account
                            </CustomButton>
                            <Box className="login-container flex f-h-center">
                                Already have an account?{' '}
                                <Box className="login-text" onClick={() => navigate(URL_LOGIN)}>
                                    login
                                </Box>
                            </Box>
                        </Box>
                    )}
                </Formik>
            </Box>
        </SignUpWrapper>
    );
};

export default SignUp;
