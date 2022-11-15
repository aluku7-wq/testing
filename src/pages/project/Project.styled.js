import styled from "styled-components";

export const Container = styled.div`
  .project {
    padding: 5vw;
    padding-left: 64px;
    background: linear-gradient(to right, white 40%, #bb0042 20%, #81007f);
    min-height: 100vh;
    display: flex;
    align-items: center;
    gap: 64px;
    img {
      width: 50vw;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
      align-self: flex-start;
      margin-top: 10vh;
    }
    .text {
      color: #fff;
      display: flex;
      flex-direction: column;
      gap: 24px;
      h1 {
        margin-bottom: 24px;
      }
      button {
        width: 150px;
        border: none;
        height: 32px;
        padding-bottom: 4px;
        outline: none;
        background: transparent;
        border: 1px solid #fff;
        color: #fff;
        border-radius: 32px;
      }
      h2 {
        text-decoration: underline;
      }
      p {
        width: 400px;
      }
    }
  }
`;
