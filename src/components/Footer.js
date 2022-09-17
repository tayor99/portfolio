import styled from "styled-components";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <div className="certify">
          <p>&#169; 2022 </p>
        </div>
        <div className="number">
          <p>Telephone: +2348088837613</p>
        </div>
        <div className="social-links">
          <AiOutlineFacebook />
          <AiFillTwitterSquare />
          <FaInstagram />
          <ImLinkedin />
          <Link to={{ pathname: "https://github.com/tayor99" }} target="_blank">
            <BsGithub />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-black-1);
  height: 110px;
  width: 100%;
  .footer {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    color: white;
    .certify {
      p {
        font-family: var(--inter-font);
        font-size: 0.9rem;
        font-weight: 400;
        margin-right: 20px;
      }
    }
    .number {
      p {
        font-family: var(--inter-font);
        font-size: 0.9rem;
        font-weight: 400;
        margin-right: 20px;
      }
    }
    .social-links {
      svg {
        margin-right: 40px;
        font-size: 1.3rem;
        color: var(--clr-white);
        cursor: pointer;
      }
    }
  }
  @media (max-width: 850px) {
    .footer {
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;
      .social-links {
        svg {
          margin-right: 15px;
          font-size: 1.2rem;
          color: var(--clr-white);
          cursor: pointer;
        }
      }
    }
  }
`;

export default Footer;
