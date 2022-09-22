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
                  I build dynamic web applications rather than just websites.
                  Through using react i can help you with everything from
                  integrating backend coding to front-end design and even help
                  consume APIs.
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
                  The web design process involves creating a site’s
                  architecture, designing its layout and user interface, and
                  coding it to work correctly. To give you a sense of how the
                  web app will look after it’s finished, I create wireframes and
                  mockups, which then can be modified based on your wishes and
                  code development.
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
                  I check how your page ranks when it comes to SEO, speed,
                  backlinks, load times, and mobile experience and then give
                  their alternative solutions and suggestions on how your web
                  app’s rank can be improved
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
  @media (max-width: 1000px) {
    .section-a {
      .cards {
        position: static;
        .section-a_left {
          display: none;
        }
        .section-a_right {
          width: 100%;
        }
        .long-box {
          display: none;
        }
      }
    }
    .section-b {
      .cards {
        position: static;
        .section-b_left {
          display: none;
        }
        .section-b_right {
          width: 100%;
        }
        .long-box {
          display: none;
        }
      }
    }
  }
  @media (max-width: 550px) {
    .section-a {
      .cards {
        .section-a_right {
          justify-content: center !important;

          .right-service {
            width: 100% !important;
          }
        }
      }
    }
    .section-b {
      .cards {
        .section-b_right {
          justify-content: center !important;

          .right-service {
            width: 100% !important;
          }
        }
      }
    }
  }
  @media (max-width: 450px) {
    .section-a {
      .cards {
        .section-a_right {
          justify-content: center !important;

          .right-service {
            width: 100% !important;
            h1 {
              font-size: 25px;
              font-weight: 600;
              line-height: 1.2;
            }
          }
        }
      }
    }
    .section-b {
      .cards {
        .section-b_right {
          justify-content: center !important;

          .right-service {
            width: 100% !important;
            h1 {
              font-size: 25px;
              font-weight: 600;
              line-height: 1.2;
            }
          }
        }
      }
    }
  }
`;
export default Offers;
