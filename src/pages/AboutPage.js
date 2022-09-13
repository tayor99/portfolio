import styled from "styled-components";
import AboutDetails from "../components/AboutDetails";
import AboutMe from "../components/AboutMe";

const AboutPage = () => {
  return (
    <Wrapper>
      <AboutMe />
      <AboutDetails />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: var(--clr-grey-1);
`;

export default AboutPage;
