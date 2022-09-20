import styled from "styled-components";
import { tools } from "../utils/constant";
import ProgressBar from "./ProgressBar";

const AboutDetails = () => {
  return (
    <Wrapper>
      <section className="section-a">
        <div className="card">
          <div className="card-header">
            <span className="circle">
              <h1>
                <u>B</u>ackground
              </h1>
            </span>
          </div>
          <div className="card-body">
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at adipiscing justo, rhoncus in massa sollicitudin velit in.
              Laoreet tellus nam fermentum sit nec in justo ac. Dolor, at
              pellentesque orci interdum laoreet congue hac vitae in. Commodo id
              vitae vel, id. Sodales nisl a leo integer malesuada at egestas
              sollicitudin gravida. Diam cras etiam pellentesque auctor
              pellentesque. Feugiat mattis neque molestie amet integer interdum.
              Ut augue in nisl lacus, ut dui venenatis purus. Sem tristique
              tortor amet eleifend viverra at.
            </p>
          </div>
        </div>
      </section>
      <section className="section-b">
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at adipiscing justo, rhoncus in massa sollicitudin velit in.
              Laoreet tellus nam fermentum sit nec in justo ac. Dolor, at
              pellentesque orci interdum laoreet congue hac vitae in. Commodo id
              vitae vel, id. Sodales nisl a leo integer malesuada at egestas
              sollicitudin gravida. Diam cras etiam pellentesque auctor
              pellentesque. Feugiat mattis neque molestie amet integer interdum.
              Ut augue in nisl lacus, ut dui venenatis purus. Sem tristique
              tortor amet eleifend viverra at.
            </p>
          </div>
          <div className="card-header">
            <span className="circle">
              <h1>
                <u>E</u>xperience
              </h1>
            </span>
          </div>
        </div>
      </section>
      <section className="section-a">
        <div className="card">
          <div className="card-header">
            <span className="circle">
              <h1>
                <u>S</u>kills
              </h1>
            </span>
          </div>
          <div className="card-body">
            <p className="card-text">
              {tools.map((tool, index) => {
                return (
                  <ProgressBar
                    language={tool?.language}
                    level={tool?.completed}
                    key={index}
                  />
                );
              })}
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  .section-a {
    width: 100%;
    padding: 40px 0;
    .card {
      width: 80%;
      margin: 0 auto;
      display: flex;
      align-items: center;

      .card-header {
        width: 40%;
        .circle {
          display: block;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background-color: var(--clr-white-1);
          padding-top: 30px;
        }
        h1 {
          font-family: var(--poppins-font);
          font-size: 2.5rem;
          font-weight: 500;
          color: var(--clr-grey-3);
          u {
            text-decoration-color: var(--clr-primary-1);
          }
        }
      }
      .card-body {
        width: 60%;
        .card-text {
          /* width: 0%; */
          border-left: 4px solid var(--clr-primary-1);
          font-family: var(--poppins-font);
          font-weight: 400;
          font-size: 1rem;
          line-height: 2;
          color: var(--clr-black-7);
          padding-left: 50px;
          text-align: justify;
        }
      }
    }
  }

  .section-b {
    width: 100%;
    padding: 40px 0;
    .card {
      width: 80%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      .card-header {
        /* width: 30%; */
        padding-left: 80px;
        .circle {
          display: block;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background-color: var(--clr-white-1);
          padding-top: 30px;
        }
        h1 {
          font-family: var(--poppins-font);
          font-size: 2.5rem;
          font-weight: 500;
          color: var(--clr-grey-3);
          u {
            text-decoration-color: var(--clr-primary-1);
          }
        }
      }
      .card-body {
        /* width: 70%; */
        .card-text {
          /* width: 0%; */
          border-right: 4px solid var(--clr-primary-1);
          font-family: var(--poppins-font);
          font-weight: 400;
          font-size: 1rem;
          line-height: 2;
          color: var(--clr-black-7);
          padding-right: 50px;
          text-align: justify;
        }
      }
    }
  }
  @media (max-width: 850px) {
    .section-a {
      .card {
        flex-direction: column;
        justify-content: center;
        .card-header {
          width: 100% !important;
        }
        .card-body {
          width: 100% !important;
          .card-text {
            /* width: 0%; */
            border-left: none !important;
            border-top: 4px solid var(--clr-primary-1);
            font-family: var(--poppins-font);
            font-weight: 400;
            font-size: 1rem;
            line-height: 2;
            color: var(--clr-black-7);
            padding-left: 0 !important;
            text-align: justify;
            margin-top: 15px;
            padding-top: 15px;
          }
        }
      }
    }
    .section-b {
      .card {
        flex-direction: column-reverse;
        .card-header {
          width: 100%;
          padding-left: 0;
        }
        .card-body {
          width: 100%;
          .card-text {
            /* width: 0%; */
            padding-right: 0;
            border-right: none;
            border-top: 4px solid var(--clr-primary-1);
            font-family: var(--poppins-font);
            font-weight: 400;
            font-size: 1rem;
            line-height: 2;
            color: var(--clr-black-7);
            padding-left: 0;
            text-align: justify;
            margin-top: 15px;
            padding-top: 15px;
          }
        }
      }
    }
  }
`;
export default AboutDetails;
