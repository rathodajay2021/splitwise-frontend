import {
    Box,
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormHelperText,
    IconButton,
    TextField,
    Typography
} from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AddGroupDialogWrapper } from './AddGroupDialog.style';
import CloseIcon from '@mui/icons-material/Close';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Api from 'Helpers/ApiHandler';
import { API_URL } from 'Helpers/Path';
import { PAGINATION_INIT } from 'Helpers/Constants';

const initialValues = {
    groupTitle: '',
    groupInfo: ''
};

const validationSchema = Yup.object({
    groupTitle: Yup.string().required('Please enter your group title'),
    groupInfo: Yup.string().required('Please enter your group description')
});

const AddGroupDialog = ({ onClose, onConfirm }) => {
    const API = useMemo(() => new Api(), []);

    const [paginationInfo, setPaginationInfo] = useState(PAGINATION_INIT);
    const [userList, setUserList] = useState({
        data: [],
        totalRecord: 0
    });
    console.log('userList', userList)

    const getUsers = useCallback(async() => {
        try {
            const response = await API.get(API_URL.GET_USERS, {
                params: {
                    perPage: paginationInfo.perPage,
                    pageNo: paginationInfo.pageNo
                }
            });

            console.log('response', response);
            if (response) {
                setUserList((prev) => {
                    let arr =
                        paginationInfo.pageNo === 0
                            ? response?.data?.data?.rows
                            : prev.data.concat(response?.data?.data?.rows);

                    return {
                        data: [...new Map(arr.map((item) => [item['_id'], item])).values()],
                        totalRecord: response?.data?.data?.count
                    };
                });
            }
        } catch (error) {
            console.log('add group model and getUsers func', error);
        }
    }, [API, paginationInfo]);

    const handleSubmit = (values) => {
        try {
            console.log(values);
        } catch (error) {
            console.log('add group model handleSubmit function', error);
        }
    };

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <AddGroupDialogWrapper
            fullWidth={true}
            maxWidth={'md'}
            open={true}
            onClose={() => onClose()}
            classes={{ paper: 'model-paper' }}>
            <DialogTitle className="flex f-v-center f-h-space-between">
                <Typography className="group-title">add group</Typography>
                <IconButton onClick={() => onClose()}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className="content">
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}>
                    {({ values, errors, touched, handleChange, handleSubmit, setFieldValue }) => (
                        <Box className="add-group-form flex f-column">
                            <Box className="field-wrapper">
                                <TextField
                                    variant="outlined"
                                    name="groupTitle"
                                    className="input-field"
                                    placeholder="Title"
                                    value={values?.groupTitle}
                                    onChange={handleChange}
                                    InputProps={{
                                        classes: {
                                            focused: 'input-focused',
                                            notchedOutline: 'input-outline'
                                        }
                                    }}
                                />
                                <FormHelperText error>
                                    {touched?.groupTitle && errors?.groupTitle}
                                </FormHelperText>
                            </Box>
                            <Box className="field-wrapper">
                                <TextField
                                    variant="outlined"
                                    name="groupInfo"
                                    className="input-field"
                                    placeholder="Group Info"
                                    value={values?.groupInfo}
                                    onChange={handleChange}
                                    InputProps={{
                                        classes: {
                                            focused: 'input-focused',
                                            notchedOutline: 'input-outline'
                                        }
                                    }}
                                />
                                <FormHelperText error>
                                    {touched?.groupInfo && errors?.groupInfo}
                                </FormHelperText>
                            </Box>
                        </Box>
                    )}
                </Formik>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" className="cancel-btn" onClick={() => onClose()}>
                    Cancel
                </Button>
                <Button variant="contained" className="submit-btn" onClick={handleSubmit}>
                    Create
                </Button>
            </DialogActions>
        </AddGroupDialogWrapper>
    );
};

export default AddGroupDialog;
