import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
body{
  background-color: #111827;
  color: #fff;
}
.ant-card-bordered {
    border: none;
    &:hover{
      border: none;
    }
  }
  :where(.css-dev-only-do-not-override-1qhpsh8).ant-drawer .ant-drawer-content {
    background: #1F2937;
  }
  :where(.css-dev-only-do-not-override-1qhpsh8).ant-drawer .ant-drawer-header-title{
    justify-content: end;
    button{
      color: #fff;
    }
  }
  @media (max-width:778px) {
    h1{
      font-size: 24px;
    }
  }
`;

export default GlobalStyle;
