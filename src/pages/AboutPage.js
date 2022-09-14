import styled from "styled-components";
import AboutDetails from "../components/AboutDetails";
import AboutMe from "../components/AboutMe";
import Accomplishment from "../components/Accomplishment";

const AboutPage = () => {
  return (
    <Wrapper>
      <AboutMe />
      <AboutDetails />
      <Accomplishment />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: var(--clr-grey-1);
`;

export default AboutPage;
