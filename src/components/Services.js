import styled from "styled-components";

const Services = () => {
  return (
    <Wraper>
      <div className="container">
        <div className="cards">
          <div className="card">
            <div className="mini-cards">
              <h1 className="card-header">Web development</h1>
              <p className="card-body">
                I can help build dynamic web applications rather than just
                ordinary websites
              </p>
            </div>
            <div
              className="mini-cards"
              style={{ background: " #DC9402", color: "#000" }}
            >
              <h1 className="card-header">Web design</h1>
              <p className="card-body">
                I can create the site’s architecture, designing its layout and
                user interface.
              </p>
            </div>
            <div
              className="mini-cards"
              style={{ background: " #DC9402", color: "#000" }}
            >
              <h1 className="card-header">Web Maintainance</h1>
              <p className="card-body">
                I also offer support and maintenance for your web app after i
                have completed your project.
              </p>
            </div>
            <div className="mini-cards">
              <h1 className="card-header">Web optimization</h1>
              <p className="card-body">
                I can help check how your page ranks when it comes to SEO,
                speed, load times, and then give their alternative solutions on
                how your web app’s rank can be improved
              </p>
            </div>
          </div>
        </div>
        <div className="service-info">
          <h1 className="service-header">MY SERVICES</h1>
        </div>
      </div>
    </Wraper>
  );
};

const Wraper = styled.div`
  width: 100%;
  background-color: var(--clr-black-2);
  padding: 5% 0;
  .container {
    width: 85%;
    margin: 0 auto;
    display: flex;
    .cards {
      width: 70%;

      .card {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 95%;
        margin: 0 auto;
        .mini-cards {
          margin-bottom: 30px;
          padding: 20px;
          width: 400px;
          height: 151px;
          background: var(--clr-black-4);
          color: var(--clr-white);
          border: 1px solid #dc9402;
          border-radius: 13px;
          .card-header {
            font-family: var(--poppins-font);
            font-weight: 600;
            font-size: 1.05rem;
            margin-bottom: 15px;
          }
          .card-body {
            font-family: var(--roboto-fonts);
            font-weight: 300;
            font-size: 0.9rem;
            line-height: 1.3;
          }
        }
      }
    }
    .service-info {
      width: 30%;
      color: var(--clr-white);
      /* padding: 4% 0; */
      .service-header {
        font-family: var(--poppins-font);
        font-weight: 700;
        font-size: 3rem;
        margin-bottom: 20px;
      }
    }
  }
  @media (max-width: 800px) {
    .container {
      width: 95%;

      .service-info {
        width: 40%;
      }
    }
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column-reverse;
      width: 80%;
      margin: 0 auto;
      .cards {
        width: 100%;
        .card {
          width: 100%;
        }
      }
      .service-info {
        width: 100%;
        margin-bottom: 35px;
        .service-header {
          font-weight: 600;
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
      }
    }
  }
`;

export default Services;
