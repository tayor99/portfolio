import styled from "styled-components";

const ProgressBar = ({ level, language }) => {
  return (
    language && (
      <Wrapper>
        <p className="language">{language}</p>
        <ContainerStyles level={level}>
          <div>
            <div className="fillerStyle">
              <span className="labelStyles"></span>
            </div>
          </div>
        </ContainerStyles>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  .language {
    margin-right: 10px;
    width: 20%;
    font-family: var(--roboto-font);
    font-weight: 500;
    font-size: 1rem;
    color: #000000;
  }
  @media (max-width: 851px) {
    .language {
      width: 35%;
    }
  }
`;
const ContainerStyles = styled.div`
  width: 80%;

  div {
    height: 5px;
    background-color: var(--clr-white);
    border-radius: 50px;
    width: 65%;
    .fillerStyle {
      height: 100%;
      width: ${(props) => `${props.level}%`};
      /* width: 90%; */
      background-color: var(--clr-black-3);
      border-radius: inherit;
      text-align: right;
      .labelStyles {
        padding: 5px;
        color: blue;
        font-weight: bold;
      }
    }
  }
  @media (max-width: 851px) {
    width: 65%;
  }
`;

export default ProgressBar;
