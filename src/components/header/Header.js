import { Container } from "./Header.styled";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <Container>
      <div className="logo">
        <h1 className={location.pathname === "/" ? "home_h1" : "h1"}>
          <img
            src={
              location.pathname === "/"
                ? `../images/logo/2.png`
                : `../images/logo/3.png`
            }
            alt=""
          />
          luku
        </h1>
      </div>
      <div className={location.pathname === "/" ? "home_links" : "links"}>
        <BsFacebook />
        <BsGithub />
        <AiFillTwitterCircle />
      </div>
    </Container>
  );
};

export default Header;
