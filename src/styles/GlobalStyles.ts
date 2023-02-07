import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Pretendard' !important;
    }
    #root{
      height: 100vh;
      padding-top: 56px;
    }
    ${reset}
`;

export default GlobalStyle;
