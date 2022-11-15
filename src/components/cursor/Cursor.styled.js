import styled from "styled-components";

export const Container = styled.div`
  .small,
  .large {
    position: fixed;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #81007f;
    pointer-events: none;
    opacity: 0.8;
  }
  .small {
    width: 16px;
    height: 16px;
    background: #bb0042;
    opacity: 1;
  }
`;
