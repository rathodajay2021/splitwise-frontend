//CORE
import React, { useMemo } from 'react';
import { Box, FormHelperText, IconButton, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

//ICON
import BackIcon from 'Assets/Images/icons/backIcon.png';

//CUSTOM
import Api from 'Helpers/ApiHandler';
import { ResetPasswordWrapper } from './ResetPassword.style';
import CustomButton from 'Components/Common/CustomBtn/CustomButton';

const InitValue = {
    email: ''
};

const ValidationSchema = Yup.object({
    email: Yup.string()
        .required('Please enter your email address or phone number')
        .email('user-validation', 'Enter Valid email address or mobile number')
});

const ResetPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const API = useMemo(() => new Api(), []);

    const handleResetSubmit = (values) => {
        console.log('handelSUbmit values', values);
    };

    return (
        <ResetPasswordWrapper className="flex f-h-center f-v-center">
            <Box className="reset-password-screen flex f-column f-v-center">
                <Box className="heading flex f-v-center">
                    <IconButton className="back-icon" onClick={() => navigate(-1)}>
                        <img src={BackIcon} alt="" className="icon-style" />
                    </IconButton>
                    <Typography className="title">reset password</Typography>
                </Box>
                <Formik
                    initialValues={InitValue}
                    validationSchema={ValidationSchema}
                    onSubmit={handleResetSubmit}>
                    {({ values, errors, touched, handleChange, handleSubmit, setFieldValue }) => (
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
            </Box>
        </ResetPasswordWrapper>
    );
};

export default ResetPassword;
