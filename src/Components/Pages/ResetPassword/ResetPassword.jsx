//CORE
import React, { useEffect, useMemo, useState } from 'react';
import {
    Box,
    FormHelperText,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import queryString from 'query-string';

//ICON
import BackIcon from 'Assets/Images/icons/backIcon.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

//CUSTOM
import Api from 'Helpers/ApiHandler';
import { ResetPasswordWrapper } from './ResetPassword.style';
import CustomButton from 'Components/Common/CustomBtn/CustomButton';
import { API_URL, URL_LOGIN } from 'Helpers/Path';
import { showToast } from 'Redux/App/Actions';
import CODES from 'Helpers/StatusCodes';
import { PASSWORD_REGEX } from 'Helpers/Constants';

const InitValue = {
    email: ''
};

const passwordInitValue = {
    password: '',
    confirmPassword: ''
};

const ValidationSchema = Yup.object({
    email: Yup.string()
        .required('Please enter your email address or phone number')
        .email('user-validation', 'Enter Valid email address or mobile number')
});

const passwordValidationSchema = Yup.object({
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

const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const API = useMemo(() => new Api(), []);

    const [userEmail, setUserEmail] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);

    const handleEmailSubmit = async (values) => {
        try {
            const response = await API.post(API_URL.VERIFY_EMAIL, {
                data: values
            });

            if (response?.status === CODES.SUCCESS) {
                dispatch(showToast(response?.data?.message));
            }
        } catch (error) {
            console.log('resetPassword component and handleEmailSubmit func', error);
        }
    };

    const handlePasswordReset = async (values) => {
        try {
            const response = await API.post(API_URL.RESET_PASSWORD, {
                data: {
                    email: userEmail,
                    password: values.password
                }
            });
            if (response.status === CODES.SUCCESS) {
                navigate(URL_LOGIN);
                dispatch(showToast(response?.data?.message));
            }
        } catch (error) {
            console.log('reset password component and handlePasswordReset func', error);
        }
    };

    useEffect(() => {
        const { email } = queryString.parse(location.search);

        if (email) setUserEmail(email);
    }, [location]);

    return (
        <ResetPasswordWrapper className="flex f-h-center f-v-center">
            <Box className="reset-password-screen flex f-column f-v-center">
                <Box className="heading flex f-v-center">
                    <IconButton className="back-icon" onClick={() => navigate(-1)}>
                        <img src={BackIcon} alt="" className="icon-style" />
                    </IconButton>
                    <Typography className="title">reset password</Typography>
                </Box>
                {!userEmail.trim() && (
                    <Formik
                        initialValues={InitValue}
                        validationSchema={ValidationSchema}
                        onSubmit={handleEmailSubmit}>
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleSubmit,
                            setFieldValue
                        }) => (
                            <Box className="reset-password-field flex f-column">
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
                                <CustomButton
                                    btnSize="btn-large"
                                    btnRounder={true}
                                    onClick={handleSubmit}>
                                    Continue
                                </CustomButton>
                            </Box>
                        )}
                    </Formik>
                )}
                {!!userEmail.trim() && (
                    <Formik
                        initialValues={passwordInitValue}
                        validationSchema={passwordValidationSchema}
                        onSubmit={handlePasswordReset}>
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleSubmit,
                            setFieldValue
                        }) => (
                            <Box className="reset-password-field flex f-column">
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
                                    reset password
                                </CustomButton>
                            </Box>
                        )}
                    </Formik>
                )}
            </Box>
        </ResetPasswordWrapper>
    );
};

export default ResetPassword;
