import styled from "styled-components";

export const NavbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10%;
  background-color: #1f2937;
  max-width: 1800px;
  margin: 0 auto;
  .menu {
    display: none;
  }
  h1 {
    a {
      text-decoration: none;
      color: #1677ff;
    }
  }
  .nav-right {
    color: #fff;
    h3 {
      a {
        color: #3275d3;
      }
    }
  }

  @media (max-width: 768px) {
    .nav-right {
      display: none;
    }
    .menu {
      display: block;
      .anticon svg {
        color: #fff;
      }
    }
  }
`;
