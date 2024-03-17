import styled from "styled-components";

export const SingUpStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111827;
  min-height: 90vh;
  max-width: 1800px;
  margin: 0 auto;
  padding: 20px 10%;
  .singUpFrom {
    color: #8ca3af;
    font-size: 16px;

    label {
      color: #8ca3af;
      font-size: 16px;
    }
    .ant-input-filled,
    :where(.css-dev-only-do-not-override-1qhpsh8).ant-input-number
      .ant-input-number-input,
    :where(.css-dev-only-do-not-override-1qhpsh8).ant-select-filled:not(
        .ant-select-customize-input
      )
      .ant-select-selector,
    :where(.css-dev-only-do-not-override-1qhpsh8).ant-picker-filled {
      background-color: #fff;
    }
  }
`;
