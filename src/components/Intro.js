import styled from "styled-components";
import myPic from "../assets/hero-img.png";

const Intro = () => {
  return (
    <Wrapper>
      <div className="about-me">
        <h4>Hello,</h4>
        <h1>I'm Tayo</h1>
        <p>
          A freelance <span>web developer </span> and <span> web designer</span>
        </p>
      </div>
      <div className="my-pic">{/* <img src={myPic} alt="profile" /> */}</div>
      {/* <div className="blur-bg">as</div> */}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 80vh;
  background-color: var(--clr-black-1);
  width: 100%;
  display: flex;
  .about-me {
    width: 40%;
    padding: 80px;
    font-family: var(--poppins-font);
    h4 {
      color: var(--clr-white);
      font-weight: 500;
      font-size: 1rem;
      font-family: inherit;
    }
    h1 {
      color: var(--clr-primary-1);
      font-family: inherit;
      font-weight: 800;
      font-size: 5.2rem;
      font-style: normal;
    }
    p {
      font-family: inherit;
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 38px;
      letter-spacing: 0.05rem;
      color: var(--clr-white);

      span {
        color: var(--clr-primary-1);
      }
    }
  }
  .my-pic {
    /* position: relative;
    border: solid 10px var(--clr-primary-2);
    height: 50vmin;
    width: 60%;
    height: 100%;
    background-image: url(../assets/hero-img.png); */
    /* background-color: var(--clr-primary-2); */
    width: 60%;
    /* width: 30%;
    margin-right: 30px;
    filter: blur(2px); */

    /* img {
      width: 100%;
      height: 100%;
    } */
  }
  /* .blur-bg {
    width: 40%;
    background-color: var(--clr-primary-2);
    filter: blur(121px);
  } */
`;
export default Intro;
