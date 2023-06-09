import { css } from 'styled-components';

export const COLORS = {
    PRIMARY: '#4f67d8',
    PRIMARY_LIGHT: '#7a73e7',
    PRIMARY_DARK: '#203f81',
    ALERT_BG: '#fdeded',
    ALERT_TEXT: '#5f2120',

    URL_TEXT: '#007fff66',

    //RED
    LIKED_RED: '#fa3e3e',

    //GREY
    GREY_TEXT_COLOR: '#707070',
    LIGHT_GREY: '#e8e8e8',
    LIGHT_GREY_SECONDARY: '#f2f2f2',
    MEDIUM_GREY: '#848484',
    NEUTRAL_GREY: '#0f172a',

    //WHITE & BLACK
    TRANSPARENT_BLACK: '#00000085',
    WHITE: '#fff',
    BLACK: '#000',
    WHITE_SMOKE: '#f5f5f5'
};

export const FONTS = {
    PRIMARY: 'Signika Regular',
    PRIMARY_LIGHT: 'Signika Light',
    PRIMARY_MEDIUM: 'Signika Medium',
    PRIMARY_SEMI_BOLD: 'Signika Semi Bold',
    PRIMARY_BOLD: 'Signika Bold'
};

// BREAKPOINTS
export const BREAKPOINTS_VALUE = {
    DISPLAY: 1750,
    DISPLAY_1650: 1650,
    DISPLAY_1600: 1600,
    DISPLAY_1550: 1550,
    DESKTOP: 1450, // x_large
    LAPTOP: 1278, // large
    LAPTOP_1200: 1200,
    LAPTOP_1100: 1100,
    LAPTOP_1050: 1050,
    TABLET: 960, // medium
    TABLET_900: 900,
    TABLET_860: 860,
    TABLET_800: 800,
    TABLET_725: 725,
    TABLET_700: 700,
    PHABLET: 600, // small
    PHABLET_500: 500,
    MOBILE: 450, // x_small
    MOBILE_376: 376, // x_small
    MOBILE_340: 340, // x_small
    MOBILE_325: 325 // x_small
};

export const BREAKPOINTS = {
    A_DESKTOP: `${BREAKPOINTS_VALUE.DESKTOP}px`,
    A_LAPTOP: `${BREAKPOINTS_VALUE.LAPTOP}px`,
    A_LAPTOP_1200: `${BREAKPOINTS_VALUE.LAPTOP_1200}px`,
    A_LAPTOP_1100: `${BREAKPOINTS_VALUE.LAPTOP_1100}px`,
    A_LAPTOP_1050: `${BREAKPOINTS_VALUE.LAPTOP_1050}px`,
    A_TABLET: `${BREAKPOINTS_VALUE.TABLET}px`,
    A_TABLET_860: `${BREAKPOINTS_VALUE.TABLET_860}px`,
    A_TABLET_800: `${BREAKPOINTS_VALUE.TABLET_800}px`,
    A_TABLET_725: `${BREAKPOINTS_VALUE.TABLET_725}px`,
    A_TABLET_700: `${BREAKPOINTS_VALUE.TABLET_700}px`,
    A_PHABLET: `${BREAKPOINTS_VALUE.PHABLET}px`,
    A_PHABLET_500: `${BREAKPOINTS_VALUE.PHABLET_500}px`,
    A_MOBILE: `${BREAKPOINTS_VALUE.MOBILE}px`,
    A_MOBILE_376: `${BREAKPOINTS_VALUE.MOBILE_376}px`,
    A_MOBILE_325: `${BREAKPOINTS_VALUE.MOBILE_325}px`,

    DISPLAY: `${BREAKPOINTS_VALUE.DISPLAY - 1}px`,
    DISPLAY_1650: `${BREAKPOINTS_VALUE.DISPLAY_1650 - 1}px`,
    DISPLAY_1600: `${BREAKPOINTS_VALUE.DISPLAY_1600 - 1}px`,
    DISPLAY_1550: `${BREAKPOINTS_VALUE.DISPLAY_1550 - 1}px`,
    DESKTOP: `${BREAKPOINTS_VALUE.DESKTOP - 1}px`, // x_large
    LAPTOP: `${BREAKPOINTS_VALUE.LAPTOP - 1}px`, // large
    LAPTOP_1200: `${BREAKPOINTS_VALUE.LAPTOP_1200 - 1}px`, // large
    LAPTOP_1100: `${BREAKPOINTS_VALUE.LAPTOP_1100 - 1}px`, // large
    LAPTOP_1050: `${BREAKPOINTS_VALUE.LAPTOP_1050 - 1}px`, // large
    TABLET: `${BREAKPOINTS_VALUE.TABLET - 1}px`, // medium
    TABLET_860: `${BREAKPOINTS_VALUE.TABLET_860 - 1}px`, // medium
    TABLET_800: `${BREAKPOINTS_VALUE.TABLET_800 - 1}px`, // medium
    TABLET_725: `${BREAKPOINTS_VALUE.TABLET_725 - 1}px`, // medium
    TABLET_700: `${BREAKPOINTS_VALUE.TABLET_700 - 1}px`, // medium
    PHABLET: `${BREAKPOINTS_VALUE.PHABLET - 1}px`, // small
    PHABLET_500: `${BREAKPOINTS_VALUE.PHABLET_500 - 1}px`, // small
    MOBILE: `${BREAKPOINTS_VALUE.MOBILE - 1}px`, // x_small
    MOBILE_376: `${BREAKPOINTS_VALUE.MOBILE_376 - 1}px`, // x_small
    MOBILE_340: `${BREAKPOINTS_VALUE.MOBILE_340 - 1}px`, // x_small
    MOBILE_325: `${BREAKPOINTS_VALUE.MOBILE_325 - 1}px` // x_small
};

export const BASE_FONT_SIZE = 14;

export const responsive = Object.keys(BREAKPOINTS).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${BREAKPOINTS[label]}) {
            ${css(...args)}
        }
    `;
    return acc;
}, {});
