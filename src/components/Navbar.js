import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import { links } from "../utils/constant";

const Nav = () => {
  return (
    <Wrapper>
      <div className="nav-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navlinks">
        {links.map((link) => {
          return link.anchor ? (
            <a href={link.path} key={link.id} className="links">
              <span>{link.text}</span>
            </a>
          ) : (
            <Link to={`${link.path}`} key={link.id} className="links">
              <span> {link.text}</span>
            </Link>
          );
        })}
      </div>
      <button>Contact me</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 73px;
  background-color: var(--clr-black-6);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .navlinks {
    .links {
      margin-right: 30px;
      padding: 20px 40px;
      cursor: pointer;
      transition: var(--transition);
      color: var(--clr-white);
      font-weight: 400;
      font-family: var(--poppins-font);
      font-size: 1rem;
      height: 100%;
      text-decoration: none;
      color: var(--clr-white);
      &:hover {
        background-color: var(--clr-primary-1);
        color: var(--clr-black-6);
      }
    }
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background-color: transparent;
    border: 1px solid var(--clr-primary-1);
    width: 138px;
    height: 45px;
    color: var(--clr-primary-1);
    cursor: pointer;
  }
`;

export default Nav;
