import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  color: #fff;

  .homepage {
    display: flex;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: 22% 100%;
    background-size: 22%;
    .overlay {
      background: rgba(0, 0, 0, 0.5);
      width: 100%;

      .hero {
        text-align: left;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 8vh;
        padding-top: 20vh;
        h2 {
          font-size: 18px;
          width: 25%;
        }

        .options {
          width: 30%;
          gap: 8px;
          height: 15vw;
          display: grid;
          grid-template-areas:
            "first second"
            "first third"
            "fourth fourth";

          .option {
            color: #000;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: scale 0.5s;
            background: linear-gradient(
              45deg,
              rgba(256, 256, 256, 0.2),
              rgba(256, 256, 256, 0.8),
              rgba(256, 256, 256, 0.2)
            );
            border-radius: 8px;

            a {
              color: #000;
              text-decoration: none;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          .option:hover {
            scale: 0.9;
          }
          .option:nth-of-type(1):nth-of-type(1) {
            grid-area: first;
          }
          .option:nth-of-type(2) {
            grid-area: second;
          }
          .option:nth-of-type(3) {
            grid-area: third;
          }
          .option:nth-of-type(4) {
            grid-area: fourth;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .homepage {
      background-position: 50% 100%;
      background-size: 50%;
      .overlay {
        .hero {
          h2 {
            width: 50%;
          }
          .options {
            width: 50%;
            height: 25vh;
          }
        }
      }
    }
  }
  @media screen and (max-width: 760px) {
    .homepage {
      background-size: 80%;
      .overlay {
        .hero {
          h2 {
            width: 60%;
          }
          .options {
            width: 60%;
          }
        }
      }
    }
  }
`;
