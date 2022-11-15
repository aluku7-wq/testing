import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 32px 64px;
  align-items: center;
  justify-content: space-between;
  .logo {
    display: flex;
    a {
      text-decoration: none;
      h1 {
        img {
          width: 20px;
        }
      }
      .home_h1 {
        color: var(--secondary);
      }
      .h1 {
        color: var(--primary);
      }
    }
  }

  .home_links {
    display: flex;
    align-items: center;
    gap: 32px;
    font-size: 18px;

    a {
      color: var(--secondary);
      text-decoration: none;
    }
  }
  .links {
    display: flex;
    align-items: center;
    gap: 32px;
    font-size: 18px;
    a {
      color: var(--primary);
      text-decoration: none;
    }
  }
  @media screen and (max-width: 760px) {
    padding: 32px;
    .home_links,
    .links {
      gap: 16px;
    }
  }
`;
