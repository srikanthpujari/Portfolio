import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import { RiContactsFill, RiFoldersFill, RiServiceFill } from "react-icons/ri";
import { ImUser } from "react-icons/im";

import { makeStyles } from "@material-ui/core";
import { PortfolioState } from "../context/PortfolioProvider";

const Navbar = () => {
  const { activeNav, setActiveNav } = PortfolioState();

  const useStyles = makeStyles((theme) => ({
    navbar: {
      color: "var(--color-white)",
      display: "flex",
      gap: "1rem",
      // justifyContent: "center",
      background: "rgba(0, 0, 0 ,0.3)",
      width: "max-content",
      left: "50%",
      transform: "translateX(-50%)",
      position: "fixed",
      borderRadius: "3rem",
      padding: "0.7rem 1.7rem",
      zIndex: 2,
      bottom: "1rem",
      backdropFilter: "blur(0px)",
    },
    individual: {
      "&:hover": {
        color: "var(--color-bg-primary)",
      },
    },
    active: {
      color: "var(--color-bg-primary)",
    },
  }));

  const classes = useStyles();

  return (
    <nav className={classes.navbar}>
      <a href="#home" style={{ color: "var(--color-white)" }}>
        <AiFillHome
          onClick={() => setActiveNav("#")}
          className={`${classes.individual}  ${
            activeNav === "#" ? classes.active : ""
          }`}
        />
      </a>
      <a href="#about" style={{ color: "var(--color-white)" }}>
        <ImUser
          onClick={() => setActiveNav("#about")}
          className={`${classes.individual}  ${
            activeNav === "#about" ? classes.active : ""
          }`}
        />
      </a>
      <a href="#experience" style={{ color: "var(--color-white)" }}>
        <FaBookOpen
          onClick={() => setActiveNav("#experience")}
          className={`${classes.individual}  ${
            activeNav === "#experience" ? classes.active : ""
          }`}
        />
      </a>
      <a href="#clients" style={{ color: "var(--color-white)" }}>
        <RiServiceFill
          onClick={() => setActiveNav("#clients")}
          className={`${classes.individual}  ${
            activeNav === "#clients" ? classes.active : ""
          }`}
        />
      </a>
      <a href="#portfolio" style={{ color: "var(--color-white)" }}>
        <RiFoldersFill
          onClick={() => setActiveNav("#portfolio")}
          className={`${classes.individual}  ${
            activeNav === "#portfolio" ? classes.active : ""
          }`}
        />
      </a>
      <a href="#contact" style={{ color: "var(--color-white)" }}>
        <RiContactsFill
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={`${classes.individual}  ${
            activeNav === "#contact" ? classes.active : ""
          }`}
        />
      </a>
    </nav>
  );
};

export default Navbar;
