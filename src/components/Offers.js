import styled from "styled-components";
import wedDev from "../assets/Group-3.png";

const Offers = () => {
  return (
    <Wrapper>
      <section className="section-a">
        <div className="cards">
          <div className="section-a_left">
            <div className="yellow-bg"></div>
            <img src={wedDev} alt="web-dev" />
          </div>
          <div className="section-a_right">
            <div className="right-service">
              <h1>
                Web <br />{" "}
                <span style={{ color: "#dc9402" }}> Development</span>
              </h1>
              <div className="webdev-body">
                <p className="orange-box">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                  dolor urna neque, porttitor non. Sollicitudin varius sit
                  gravida massa laoreet. Massa lobortis curabitur magnis purus
                  vitae vel nisl.
                </p>
              </div>
            </div>
          </div>
          <div className="long-box"></div>
        </div>
      </section>
      <section className="section-b">
        <div className="cards">
          <div className="section-b_right">
            <div className="right-service">
              <h1>
                Web <br /> <span style={{ color: "#dc9402" }}> Design</span>
              </h1>
              <div className="webdev-body">
                <p className="orange-box" style={{ textAlign: "left" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                  dolor urna neque, porttitor non. Sollicitudin varius sit
                  gravida massa laoreet. Massa lobortis curabitur magnis purus
                  vitae vel nisl.
                </p>
              </div>
            </div>
          </div>
          <div className="section-b_left">
            <div className="yellow-bg"></div>
            <img src={wedDev} alt="web-dev" />
          </div>

          <div className="long-box"></div>
        </div>
      </section>
      <section className="section-a">
        <div className="cards">
          <div className="section-a_left">
            <div className="yellow-bg"></div>
            <img src={wedDev} alt="web-dev" />
          </div>
          <div className="section-a_right">
            <div className="right-service">
              <h1>
                Web <br />{" "}
                <span style={{ color: "#dc9402" }}> Maintainance</span>
              </h1>
              <div className="webdev-body">
                <p className="orange-box">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                  dolor urna neque, porttitor non. Sollicitudin varius sit
                  gravida massa laoreet. Massa lobortis curabitur magnis purus
                  vitae vel nisl.
                </p>
              </div>
            </div>
          </div>
          <div className="long-box"></div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  section {
    width: 70%;
    margin: 0 auto;
    padding: 50px 0;

    .cards {
      display: flex;
      position: relative;
      .section-a_left {
        width: 50%;
        .yellow-bg {
          width: 120px;
          height: 100px;
          background: var(--clr-primary-1);
        }
        img {
          position: absolute;
          top: 19px;
          left: 25px;
        }
      }
      .section-a_right {
        width: 50%;
        display: flex;
        justify-content: end;
        .right-service {
          width: 70%;
          h1 {
            font-family: var(--poppins-font);
            font-size: 40px;
            font-weight: 700;
            line-height: 1.4;
            letter-spacing: 0.04em;
            text-align: right;
            margin-bottom: 20px;
          }
        }
      }
    }

    .long-box {
      width: 100%;
      height: 80px;
      position: absolute;
      bottom: 20px;
      background: var(--clr-black-8);
      /* opacity: ; */
    }
  }
  .section-b {
    .cards {
      display: flex;
      position: relative;
      .section-b_left {
        width: 50%;
        display: flex;
        justify-content: end;
        .yellow-bg {
          width: 120px;
          height: 100px;
          background: var(--clr-primary-1);
        }
        img {
          position: absolute;
          top: 19px;
          right: 19px;
        }
      }
      .section-b_right {
        width: 50%;
        display: flex;
        justify-content: start;
        .right-service {
          width: 70%;
          h1 {
            font-family: var(--poppins-font);
            font-size: 40px;
            font-weight: 700;
            line-height: 1.4;
            letter-spacing: 0.04em;
            text-align: left;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
`;
export default Offers;
