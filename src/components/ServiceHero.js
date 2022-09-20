import styled from "styled-components";

const ServiceHero = () => {
  return (
    <Wrapper className="angry">
      <div className="service">
        <h1>
          <u>S</u>ervice
        </h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 120px;
  width: 100%;
  .service {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    font-family: var(--poppins-font);
    font-size: 2rem;
    font-weight: 700;
    color: var(--clr-white);
    u {
      text-decoration-color: var(--clr-primary-1);
    }
  }
  @media (max-width: 1000px) {
    height: 90px;
    .service {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
`;

export default ServiceHero;
