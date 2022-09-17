import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import { links } from "../utils/constant";

const SIdebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={Logo} alt="logo" className="logo" />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            return link.anchor ? (
              <a
                href={link.path}
                key={link.id}
                className="links"
                onClick={closeSidebar}
              >
                <span>{link.text}</span>
              </a>
            ) : (
              <Link
                to={`${link.path}`}
                key={link.id}
                className="links"
                onClick={closeSidebar}
              >
                <span> {link.text}</span>
              </Link>
            );
          })}
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  padding: 1rem 1.5rem;
  background-color: var(--clr-black-1);
  width: 100%;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: var(--clr-black-1);
  }
  .close-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: transparent;
    border: 1px solid var(--clr-primary-1);
    width: 60px;
    height: 50px;
    color: var(--clr-primary-1);
    cursor: pointer;
    font-family: var(--poppins-font);
  }

  .links {
    display: block;
    text-align: left;
    font-size: 1.5 rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-white);
    transition: var(--transition);
    text-decoration: none;
    margin-bottom: 20px;
  }

  .links:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-black-1);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
    width: 100vw;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default SIdebar;
