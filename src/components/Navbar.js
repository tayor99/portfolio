import styled from "styled-components";
import Logo from "../assets/logo.png";
import { links } from "../utils/constant";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="navlinks">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <span className="links">{link.text} </span>
            </li>
          );
        })}
      </ul>
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
    li {
      display: inline;
      margin-right: 30px;
      padding: 20px 40px;
      cursor: pointer;
      transition: var(--transition);
      color: var(--clr-white);
      .links {
        font-weight: 400;
        font-family: var(--poppins-font);
        font-size: 1rem;
        height: 100%;
      }
      &:hover {
        color: var(--clr-black-1);
        background-color: var(--clr-primary-1);
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

export default Navbar;
