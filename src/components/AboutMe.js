import styled from "styled-components";
import profile from "../assets/Group-2.png";
const AboutMe = () => {
  return (
    <Wrapper>
      <div className="about-left">
        <div className="aboutLeft-text">
          <p>ABOUT</p>
          <p className="underline">
            <u>ME</u>
          </p>
        </div>
      </div>
      <div className="about-right">
        <div className="img-container">
          <img src={profile} alt="profile-img" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  .about-left {
    width: 30%;
    .aboutLeft-text {
      width: 50%;
      margin: 0 auto;
      padding-top: 30%;
      p {
        font-family: var(--poppins-font);
        font-size: 3.7rem;
        font-weight: 700;
        color: var(--clr-grey-2);
      }
      p.underline {
        margin-top: -20px;
        u {
          text-decoration: none;
          color: var(--clr-primary-1);
          border-bottom: 10px solid var(--clr-grey-2);
          margin-bottom: 25px;
        }
      }
    }
  }
  .about-right {
    width: 70%;
    padding-top: 60px;
    .img-container {
      margin: 0 auto;
      width: 60%;
      height: 600px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default AboutMe;
