import styled from 'styled-components';
import OTPBackgroundImage from 'Assets/Images/wallpaper/loginBackground1.webp';
import { COLORS, FONTS, responsive } from 'Styles/Constants';

export const HomePageWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${OTPBackgroundImage});

    .container {
        background: ${COLORS.WHITE};
        height: 100%;
        width: 50%;
        padding: 30px;

        ${responsive.TABLET`
            width: 65%;
        `}

        ${responsive.MOBILE`
            width: 100%;
        `}

        .create-group{
            border: 1px solid red;
            .text{
                text-transform: capitalize;
                font-family: ${FONTS.PRIMARY_MEDIUM}
                font-size: 16px
            }
        }

    }
`;
