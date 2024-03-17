import styled from "styled-components";

export const FooterStyle = styled.div`
  background: #1f2937;
  display: flex;
  justify-content: space-between;
  padding: 15px 10%;
  max-width: 1800px;
  margin: 0 auto;
  flex-wrap: wrap;

  .left-footer {
    a {
      text-decoration: none;
      color: #fff;
    }
  }
  .right-footer {
    .icons {
      display: flex;
      gap: 10px;
      padding: 10px 0;
      a {
        text-decoration: none;
        color: #fff;
        background: #000;
        padding: 7px;
        border-radius: 6px;
        height: 32px;
        width: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  @media (max-width: 778px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
  }
`;
