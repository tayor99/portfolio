import LittleCircles from "../assets/decorative-circles.svg";
import styled from "styled-components";

const Accomplishment = () => {
  return (
    <Wrapper>
      <div className="accomplishment">
        <div className="img-container">
          <img src={LittleCircles} alt="circles" />
        </div>
        <div className="decorative-circle">
          <div className="circles1">
            <div className="thick-circle  circle1">15+</div>
            <p>
              Completed <span style={{ color: "#dc9402" }}>projects</span>
            </p>
          </div>
          <div className="circles2">
            <p>
              Esteemed <span style={{ color: "#dc9402" }}>Clients</span>
            </p>
            <div className="thick-circle circle2">10+</div>
          </div>
          <div className="circles3">
            <div className="thick-circle circle3">10+</div>
            <p>
              Featured <span style={{ color: "#dc9402" }}>projects</span>
            </p>
          </div>
          <div className="circles4">
            <p>
              Years <span style={{ color: "#dc9402" }}>Experience</span>
            </p>
            <div className="thick-circle  circle4">2+</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 60px 0;
  .accomplishment {
    width: 70%;
    margin: 0 auto;
    position: relative;
    .img-container {
      height: 500px;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .decorative-circle {
      display: flex;
      .circles1 {
        position: absolute;
        top: 35px;
        left: 30px;
        .circle1 {
          margin-bottom: 40px;
        }

        p {
          text-align: center;
          font-family: var(--poppins-font);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--clr-grey-2);
        }
      }
      .circles2 {
        position: absolute;
        bottom: 35px;
        left: 290px;

        p {
          text-align: center;
          font-family: var(--poppins-font);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--clr-grey-2);
          margin-bottom: 60px;
        }
      }
      .circles3 {
        position: absolute;
        top: 30px;
        right: 290px;
        .circle3 {
          margin-bottom: 40px;
        }

        p {
          text-align: center;
          font-family: var(--poppins-font);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--clr-grey-2);
          /* margin-bottom: 60px; */
        }
      }
      .circles4 {
        position: absolute;
        bottom: 35px;
        right: 30px;

        p {
          text-align: center;
          font-family: var(--poppins-font);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--clr-grey-2);
          margin-bottom: 60px;
        }
      }
    }
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export default Accomplishment;
