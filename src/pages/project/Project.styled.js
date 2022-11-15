import styled from "styled-components";

export const Container = styled.div`
  .project {
    .home {
      display: flex;
      padding: 0 15vw;
      padding-top: 15vh;
      gap: 10vw;
      align-items: center;
      .text {
        width: 30vw;
        display: flex;
        flex-direction: column;
        gap: 3vh;
        h1 {
          text-transform: capitalize;
        }
        .buttons {
          display: flex;
          gap: 24px;
          a {
            width: 100px;
            text-decoration: none;
            font-size: 14px;
            display: flex;
            justify-content: center;
            background: linear-gradient(
              45deg,
              var(--primary),
              var(--secondary),
              var(--primary)
            );

            border: none;
            padding: 8px;
            border-radius: var(--border_radius);
            color: var(--primary);
            font-weight: bold;
          }
        }
        .description {
        }
      }

      img {
        width: 30vw;
        height: fit-content;
        border-radius: var(--border_radius);
        box-shadow: var(--box_shadow);
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .project {
      .home {
        flex-direction: column-reverse;
        overflow: hidden;
        .text {
          width: 90%;
        }
        img {
          width: 90%;
        }
      }
    }
  }
  @media screen and (max-width: 760px) {
    .project {
      .home {
        padding: 0 5vw;
        padding-top: 15vh;
      }
    }
  }
`;
