import styled from 'styled-components';
import { COLORS, FONTS, responsive } from 'Styles/Constants';
import OTPBackgroundImage from 'Assets/Images/wallpaper/loginBackground1.webp';

export const LoginWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${OTPBackgroundImage});

    .login-screen {
        background: ${COLORS.WHITE};
        height: fit-content;
        width: 30%; //check
        padding: 30px;
        border-radius: 15px;

        ${responsive.DISPLAY_1550`
            width: 35%;
        `}

        ${responsive.TABLET`
            width: 65%;
        `}

        ${responsive.MOBILE`
            width: 75%;
        `}

        .heading {
            width: 100%;
            margin-bottom: 30px;

            .title {
                font-size: 40px;
                font-family: ${FONTS.PRIMARY_MEDIUM};
                text-transform: capitalize;
            }
        }

        .login-field {
            width: 100%;
            gap: 10px;

            .field-wrapper {
                .input-field {
                    width: 100%;
                    padding: auto 15px;

                    .input-field-root {
                        border-radius: 40px;
                    }

                    .password-field-root {
                        border-radius: 40px 0 0 40px;
                    }

                    .input-focused {
                        border: none;
                    }

                    .input-outline {
                        border: 1px solid ${COLORS.TEXT_LIGHT};
                        border-radius: 40px;
                    }
                }
            }

            .msg-section {
                gap: 20px;

                .password-msg {
                    text-transform: capitalize;
                    text-decoration: underline;
                    cursor: pointer;
                }

                .sign-up-container {
                    .sign-up {
                        margin: 0 0 0 5px;
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`;
