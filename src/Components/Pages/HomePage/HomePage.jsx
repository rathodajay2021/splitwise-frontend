import React, { useState } from 'react';
import { HomePageWrapper } from './HomePage.style';
import { Box, IconButton, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddGroupDialog from 'Components/Common/AddGroupDialog';

const HomePage = () => {
    const [addGroupModel, setAddGroupModel] = useState(false);
    return (
        <HomePageWrapper className=" flex f-h-center">
            <Box className="container">
                <Box
                    className="create-group flex f-v-center hover"
                    onClick={() => setAddGroupModel(true)}>
                    <IconButton>
                        <AddCircleOutlineIcon />
                    </IconButton>
                    <Typography className="text">add group</Typography>
                </Box>
            </Box>
            {addGroupModel && <AddGroupDialog onClose={() => setAddGroupModel(false)} />}
        </HomePageWrapper>
    );
};

export default HomePage;
