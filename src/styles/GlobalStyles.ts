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


`;
