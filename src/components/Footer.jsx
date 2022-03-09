import { makeStyles } from "@material-ui/core";
import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { PortfolioState } from "../context/PortfolioProvider";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "var(--color-bg-primary)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem 0 0 0",
    marginTop: "2rem",
  },
  logo: {
    color: "var(--color-bg)",
    fontWeight: "700",
    fontSize: "2rem",
  },
  links: {
    display: "flex",
    gap: "2rem",
    marginTop: "1rem",
    fontSize: "0.8rem",
    [theme.breakpoints.down("xs")]: {
      gap: "0.8rem",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  social: {
    display: "flex",
    gap: "2rem",
    fontSize: "1.5rem",
    marginTop: "1rem",
    marginBottom: "1rem",
    cursor: "pointer",
  },
  copyright: {
    color: "var(--color-bg)",
    fontSize: "0.9rem",
    marginBottom: "4rem",
  },
}));

const Footer = () => {
  const classes = useStyles();

  const { setActiveNav } = PortfolioState();

  return (
    <footer className={classes.footer}>
      <a
        href="#home"
        className={classes.logo}
        onClick={() => setActiveNav("#")}
      >
        Sri
      </a>

      <ul className={classes.links}>
        <li>
          <a
            href="#home"
            style={{ color: "var(--color-bg)" }}
            onClick={() => setActiveNav("#")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            style={{ color: "var(--color-bg)" }}
            onClick={() => setActiveNav("#about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#experience"
            style={{ color: "var(--color-bg)" }}
            onClick={() => setActiveNav("#experience")}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#clients"
            style={{ color: "var(--color-bg)" }}
            onClick={() => setActiveNav("#clients")}
          >
            Clients
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            style={{ color: "var(--color-bg)" }}
            onClick={() => setActiveNav("#portfolio")}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            style={{ color: "var(--color-bg)" }}
            onClick={() => setActiveNav("#contact")}
          >
            Contact
          </a>
        </li>
      </ul>

      <div className={classes.social}>
        <a
          href="https://www.linkedin.com/in/pujari-srikanth-83a55925/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin style={{ color: "var(--color-bg)" }} />
        </a>
        <a
          href="https://github.com/srikanthpujari"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare style={{ color: "var(--color-bg)" }} />
        </a>
        <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
          <FaTwitterSquare style={{ color: "var(--color-bg)" }} />
        </a>
      </div>

      <div className={classes.copyright}>
        <small>&copy; SRI PUJARI. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
