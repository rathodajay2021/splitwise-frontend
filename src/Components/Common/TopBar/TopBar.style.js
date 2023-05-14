import { COLORS, FONTS } from 'Styles/Constants';
import { styled } from 'styled-components';

export const TopBarWrapper = styled.div`
    height: 60px;
    box-sizing: border-box;
    padding: 0 10px;
    background-color: ${COLORS.PRIMARY_DARK};
    color: ${COLORS.WHITE};

    .title {
        font-size: 22px;
        font-family: ${FONTS.PRIMARY_SEMI_BOLD};
    }

    .user-details {
        gap: 10px;
        cursor: pointer;
    }
`;
