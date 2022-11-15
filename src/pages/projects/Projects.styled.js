import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8vh;
    gap: 5vw;
    h4 {
      font-size: 20px;
      color: #63656d;
    }
    .icon {
      font-size: 24px;
      cursor: pointer;
    }
  }
  .projects_grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin: 5vh 20vw;

    .card {
      display: flex;
      flex-direction: column;
      gap: 8px;

      a {
        color: #63656d;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        gap: 8px;
        img {
          width: 100%;
          box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
        }
      }
    }
  }
  @media screen and (max-width: 880px) {
    .projects_grid {
      margin: 5vh 10vw;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 760px) {
    .title {
      margin: 8vh 10vw 0 10vw;
    }
    .projects_grid {
      margin: 5vh 10vw;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
