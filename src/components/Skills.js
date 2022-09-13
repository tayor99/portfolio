import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { tools } from "../utils/constant";

const Skills = () => {
  return (
    <Wrapper>
      <div className="skill-left">
        <div className="about-me">
          <h1>About</h1>
          <div className="me">
            <span></span>
            <h1>Me</h1>
          </div>

          <button className="btn">View CV</button>
        </div>
      </div>
      <div className="skill-right">
        <section>
          <p className="skill-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis et
            mauris et fames sagittis malesuada. Lectus donec non volutpat, netus
            laoreet. Vitae nunc imperdiet blandit odio duis a. Et habitasse quis
            tortor massa venenatis blandit laoreet erat. Amet, hendrerit sed
            tortor aenean massa tristique ornare eget amet. In dignissim
            tincidunt turpis pellentesque urna morbi tortor nunc ut. Gravida
            tincidunt massa velit.
          </p>
          <div className="skill-bar">
            <p className="skillBar-header">Skills</p>
            {tools.map((tool, index) => {
              return (
                <ProgressBar
                  language={tool?.language}
                  level={tool?.completed}
                  key={index}
                />
              );
            })}
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-black-2);
  width: 100%;
  display: flex;
  .skill-left {
    width: 40%;
    .about-me {
      width: 70%;
      margin: 80px auto;
      h1 {
        font-family: var(--poppins-font);
        color: var(--clr-white);
        font-weight: 800;
        font-size: 5.2rem;
      }
      .me {
        display: flex;
        align-items: center;
        margin-top: -22px;
        span {
          margin-right: 30px;
          display: block;
          width: 177px;
          height: 48px;
          background-color: var(--clr-white);
        }
      }
      button {
        margin-top: 40px;
      }
    }
  }
  .skill-right {
    width: 60%;
    background-color: var(--clr-primary-1);
    section {
      width: 90%;
      margin: 50px auto;
    }
    .skill-text {
      font-family: var(--roboto-font);
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6;
      text-align: justify;
      color: var(--clr-white-1);
      margin-bottom: 40px;
    }
    .skill-bar {
      .skillBar-header {
        color: var(--clr-black-2);
        font-family: var(--roboto-font);
        font-weight: 800;
        font-size: 1.3rem;
      }
    }
  }
`;

export default Skills;
