import { Dialog } from '@mui/material';
import { styled } from 'styled-components';
import { COLORS, FONTS } from 'Styles/Constants';

export const AddGroupDialogWrapper = styled(Dialog)`
    .model-paper {
        max-width: 600px;
    }

    .group-title {
        text-transform: capitalize;
        font-size: 22px;
        font-family: ${FONTS.PRIMARY_MEDIUM};
    }

    .content {
        .add-group-form {
            width: 100%;
            gap: 10px;

            .field-wrapper {
                .input-field {
                    width: 100%;
                    padding: auto 15px;

                    .input-focused {
                        border: none;
                    }

                    .input-outline {
                        border: 1px solid ${COLORS.TEXT_LIGHT};
                    }
                }
            }
        }
    }

    .cancel-btn {
        background: ${COLORS.MEDIUM_GREY};
    }
`;
