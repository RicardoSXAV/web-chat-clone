import { createGlobalStyle } from "styled-components";
import { COLORS } from "../constants/Colors";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;

        background-color: ${COLORS.backgroundBlack};
        color: ${COLORS.white};
    }

    *, button, input {
        font-family: 'Poppins', sans-serif;

        border: 0;
        outline: 0;
    }

 /*    :root {
        --background-black: #161819;
        --white: #FFFFFF;
        --gray: #323337;
        --light-gray: #848688;
        --dark-gray: #242627;
        --blue: #43A1FE;
        --red: #FE764B;
        --green: #70CD99;
        --purple: #725DFF;
        --yellow: #E9D570;
    } */
`;
