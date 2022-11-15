import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 32px 64px;
  align-items: center;
  justify-content: space-between;
  .logo {
    display: flex;
    h1 {
      img {
        width: 20px;
      }
    }
    .home_h1 {
      color: #fff;
    }
    .h1 {
      color: #63656d;
    }
  }
  .home_links {
    display: flex;
    align-items: center;
    gap: 32px;
    font-size: 18px;
    color: #fff;
  }
  .links {
    display: flex;
    align-items: center;
    gap: 32px;
    font-size: 18px;
    color: #63656d;
  }
  @media screen and (max-width: 760px) {
    padding: 32px;
    .home_links,
    .links {
      gap: 16px;
    }
  }
`;
