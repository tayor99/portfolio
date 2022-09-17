import styled from "styled-components";
import webImg from "../assets/web-dev-projects.png";

const Projects = () => {
  return (
    <>
      <TopWrapper>
        <div className="projects">
          <h1 className="projects-header">
            <span className="orange-color">Completed </span> <br /> Projects
          </h1>
          <div className="development-card">
            <p className="web-header">Development</p>
            <img src={webImg} alt="web-dev" className="web-body" />
          </div>
        </div>
      </TopWrapper>
      <BottomWraper>
        <div className="collaborate">
          <div className="collaborate-header">
            <div className="header-text">
              <h1> Why you should </h1>
              <p>
                Collaborate{" "}
                <span style={{ color: "#fff" }}>with me on your next</span>{" "}
                project
              </p>
            </div>
          </div>
          <div className="collaborate-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor,
              pulvinar in in gravida elit enim nulla. Vestibulum integer
              volutpat rutrum ac dolor nibh. Facilisi id sit augue morbi dolor
              at. Volutpat at in eleifend gravida nibh elit. Etiam ullamcorper
              pretium lacus amet quis laoreet magna tellus.
            </p>
          </div>
        </div>
      </BottomWraper>
    </>
  );
};

const TopWrapper = styled.div`
  width: 100%;
  background-color: var(--clr-black-3);
  .projects {
    width: 80%;
    margin: 0 auto;
    .projects-header {
      color: var(--clr-white);
      padding-top: 7%;
      padding-bottom: 3%;
      font-family: var(--poppins-font);
      font-size: 3rem;
      font-weight: 700;

      .orange-color {
        color: var(--clr-primary-1);
      }
    }
    .development-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--clr-black-1);
      .web-header {
        font-family: var(--poppins-font);
        font-size: 2.4rem;
        font-weight: 500;
      }
    }
  }
`;

const BottomWraper = styled.div`
  .collaborate-header {
    background-color: var(--clr-primary-1);
    .header-text {
      width: 80%;
      margin: 0 auto;
      padding: 20px 0;
      h1 {
        font-family: var(--poppins-font);
        font-weight: 300;
        font-size: 2rem;
        color: var(--clr-white);
      }
      p {
        font-family: var(--poppins-font);
        font-weight: 700;
        font-size: 3rem;
      }
    }
  }
  .collaborate-body {
    width: 80%;
    margin: 0 auto;
    padding-top: 35px;
    padding-bottom: 60px;
    p {
      width: 55%;
      text-align: justify;
      font-family: var(--roboto-font);
      font-size: 1rem;
      font-weight: 400;
      color: var(--clr-black-1);
      line-height: 1.5rem;
    }
  }
  @media (max-width: 800px) {
    .collaborate-header {
      .header-text {
        width: 80%;
        margin: 0 auto;
        padding: 20px 0;
        h1 {
          line-height: 0.9;
        }
        p {
          line-height: 1.3;
        }
      }
    }
    .collaborate-body {
      P {
        width: 100%;
        text-align: left;
      }
    }
  }
  @media (max-width: 560px) {
    .collaborate-header {
      .header-text {
        width: 90%;
        margin: 0 auto;
        padding: 20px 0;
        h1 {
          line-height: 1.7;
        }
        p {
          line-height: 1.2;
          font-size: 2rem;
        }
      }
    }
    .collaborate-body {
      width: 90%;
    }
  }
`;

export default Projects;
