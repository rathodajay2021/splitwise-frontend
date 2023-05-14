import React, { useState } from 'react';
import { TopBarWrapper } from './TopBar.style';
import { Avatar, Box, Divider, Menu, MenuItem, Typography } from '@mui/material';
import { APP_NAME } from 'Helpers/Constants';
import { CreateUserName, stringAvatar } from 'Helpers/Utils';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'Redux/Auth/Actions';
import { COLORS } from 'Styles/Constants';

const TopBar = (props) => {
    const dispatch = useDispatch();
    const [openMenu, setOpenMenu] = useState(null);
    const userInfo = useSelector((state) => state.App.userData);

    const handleGroup = () => {};

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <TopBarWrapper className="flex f-h-space-between f-v-center">
            <Typography className="title">{APP_NAME}</Typography>
            <Box
                className="flex f-v-center f-h-center user-details"
                onClick={(e) => setOpenMenu(e.currentTarget)}>
                <Avatar
                    {...stringAvatar(
                        CreateUserName(userInfo?.firstName, userInfo?.lastName),
                        userInfo?.profilePic
                    )}
                />
                <Box className="flex">
                    <Typography>
                        {CreateUserName(userInfo?.firstName, userInfo?.lastName)}
                    </Typography>
                    <ArrowDropDownIcon color={COLORS.WHITE} />
                </Box>
            </Box>
            <Menu anchorEl={openMenu} open={Boolean(openMenu)} onClose={() => setOpenMenu(null)}>
                <MenuItem onClick={handleGroup}>Create Group</MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                    <LogoutIcon />
                    Logout
                </MenuItem>
            </Menu>
        </TopBarWrapper>
    );
};

export default TopBar;
