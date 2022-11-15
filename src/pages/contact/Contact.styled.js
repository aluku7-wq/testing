import styled from "styled-components";

export const Container = styled.div`
  .contact {
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      to bottom,
      var(--light_gray) 60%,
      var(--secondary) 10%
    );
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 10vh 10vw;
      gap: 24px;
      .card {
        display: flex;
        color: var(--primary);
        flex-direction: column;
        align-items: center;
        gap: 64px;
        padding: 64px 24px;
        font-weight: bold;
        background-color: var(--secondary);
        box-shadow: var(--box_shadow);
        border-radius: 8px;
      }
    }
  }
  @media screen and (max-width: 880px) {
    .contact {
      .grid {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
