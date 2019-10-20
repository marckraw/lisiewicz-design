import { createGlobalStyle } from 'styled-components';

import { mainTextColor } from './constants/variables';

/*
    This file is for some global styles, like font-family, sizes
    or other heading, typography, colors, stuff
*/
export default createGlobalStyle`
    * {
        font-family: 'Lato', sans-serif !important;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    a:visited {
        color: ${mainTextColor};
    }
`;
