//CORE
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//CUSTOM
import { ContentWrapper, WebsiteWrapper } from './Website.style';
import { getWindowDimensions } from 'Helpers/Utils';
import Route from 'Routes/Route';
import EventManager from 'Components/Common/EventManger';
import { TopBar } from 'Components/Common/TopBar';
import { userProfileData } from 'Redux/App/Actions';

const Website = () => {
    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state) => state.Auth.isLoggedIn);

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('userInfo'));
        user?._id && dispatch(userProfileData(user));
    }, [dispatch]);

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <WebsiteWrapper>
            {isLoggedIn && <TopBar />}
            <ContentWrapper
                $bottomBarHeight={isLoggedIn ? 60 : 0}
                $windowHeight={windowDimensions.height}>
                <Route />
            </ContentWrapper>
            <EventManager />
        </WebsiteWrapper>
    );
};

export default Website;
