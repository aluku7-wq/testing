import { Container } from "./Header.styled";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <Container>
      <div className="logo">
        <Link to="/">
          <h1 className={location.pathname === "/" ? "home_h1" : "h1"}>
            <img
              src={
                location.pathname === "/"
                  ? `../images/logo/1.png`
                  : `../images/logo/2.png`
              }
              alt=""
            />
            luku
          </h1>
        </Link>
      </div>
      <div className={location.pathname === "/" ? "home_links" : "links"}>
        <a href="https://github.com/aluku7-wq">
          <BsFacebook />
        </a>
        <a href="https://github.com/aluku7-wq">
          <BsGithub />
        </a>
        <a href="https://github.com/aluku7-wq">
          <AiFillTwitterCircle />
        </a>
      </div>
    </Container>
  );
};

export default Header;
