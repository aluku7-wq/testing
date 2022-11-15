import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding: 10vh 20vw;

    .card {
      display: flex;
      flex-direction: column;
      text-align: center;

      .icon {
        display: flex;
        color: var(--primary);
        align-items: center;
        justify-content: center;
        background: linear-gradient(
          45deg,
          var(--primary),
          var(--secondary),
          var(--primary)
        );
        border-radius: 8px;
        height: 15vh;
        font-size: 40px;
      }
    }
  }
  @media screen and (max-width: 880px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 760px) {
    .grid {
      grid-template-columns: repeat(1, 1fr);
      padding: 10vh 24px;
      .card {
        .icon {
          height: 20vh;
        }
      }
    }
  }
`;
