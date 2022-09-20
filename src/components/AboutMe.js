import styled from "styled-components";
import profile from "../assets/tayo.jpg";
import blurred from "../assets/BLURRED.png";

const AboutMe = () => {
  return (
    <Wrapper>
      <div className="container">
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
            <div className="img-1">
              <img src={profile} alt="profile-img" />
            </div>
            <div className="img-2">
              <img src={blurred} alt="backgroung_img" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .about-left {
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
      padding-top: 60px;
      .img-container {
        position: relative;
        .img-1 {
          width: 350px;
          height: 420px;
          z-index: 2;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 2;
          }
        }
        .img-2 {
          width: 396px;
          height: 464px;
          position: absolute;
          top: 40px;
          z-index: -1;
          right: 147px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
  @media (max-width: 1067px) {
    .container {
      width: 95%;
    }
  }
  @media (max-width: 850px) {
    .container {
      width: 80%;
      flex-direction: column;
      margin: 0 auto;
      align-content: space-around;
      flex-wrap: wrap;
      .about-left {
        .aboutLeft-text {
          width: 100%;
          text-align: center;
          padding-top: 20px;
        }
      }
      .about-right {
        padding-top: 30px;

        .img-container {
          position: relative;
          width: 80%;
          justify-self: center;
          .img-2 {
            position: absolute;
            left: 20px;
          }
        }
      }
    }
  }
  @media (max-width: 517px) {
    .container {
      width: 100%;
      flex-direction: column;

      flex-wrap: nowrap;

      .about-left {
        .aboutLeft-text {
          width: 100%;
          text-align: center;
          padding-top: 20px;
        }
      }
      .about-right {
        padding-top: 30px;

        .img-container {
          position: relative;
          width: 60%;
          /* padding-right: 20px; */
          display: flex;
          justify-content: center;

          .img-1 {
            width: 280px;
            height: 350px;
            z-index: 2;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              z-index: 2;
            }
          }
          .img-2 {
            display: none;
          }
        }
      }
    }
  }
  @media (max-width: 450px) {
    .img-container {
      position: relative;
      width: 70%;
      /* padding-right: 20px; */
      margin: 0 auto;
    }
  }
`;

export default AboutMe;
