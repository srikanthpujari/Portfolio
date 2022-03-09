import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { MdWork } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

import { makeStyles } from "@material-ui/core";

import { RiFoldersFill } from "react-icons/ri";
import { PortfolioState } from "../context/PortfolioProvider";

const useStyles = makeStyles((theme) => ({
  tag: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2rem",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
  },

  aboutContent: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    gap: 10,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "30%",
      gap: 20,
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      width: "50%",
    },
  },
  article: {
    width: "auto",
    background: "var( --color-bg-variant)",
    borderRadius: "1rem",
    padding: "1.5rem",
    textAlign: "center",
    border: "1px solid transparent",
    transition: "var(--transition)",
    "&:hover": {
      background: "transparent",
      border: "1px solid var(--color-bg-primary-variant)",
    },
    cursor: "pointer",
  },
  icon: {
    color: "var(--color-bg-primary)",
    fontSize: "1.5rem",
  },
}));

const About = () => {
  const classes = useStyles();

  const { setActiveNav } = PortfolioState();

  return (
    <section id="about">
      <div className={classes.tag}>
        <Typography variant="caption" style={{ color: "var( --color-light)" }}>
          Get to know
        </Typography>
        <Typography variant="h5">About Me</Typography>
      </div>
      <Container className={classes.container}>
        <div className={`${classes.aboutContent}`}>
          <article
            className={classes.article}
            onClick={() => {
              document.getElementById("experience").scrollIntoView();
              setActiveNav("#experience");
            }}
          >
            <MdWork className={classes.icon} />
            <h5>Experience</h5>
            <small style={{ color: "var(--color-light)" }}>
              Fullstack Developer
            </small>
          </article>
          <article
            className={classes.article}
            onClick={() => {
              document.getElementById("clients").scrollIntoView();
              setActiveNav("#clients");
            }}
          >
            <FaUsers className={classes.icon} />
            <h5>Clients</h5>
            <small style={{ color: "var(--color-light)" }}>
              Recent Assignments
            </small>
          </article>
          <article
            className={classes.article}
            onClick={() => {
              document.getElementById("portfolio").scrollIntoView();
              setActiveNav("#portfolio");
            }}
          >
            <RiFoldersFill className={classes.icon} />
            <h5>Portfolio</h5>
            <small style={{ color: "var(--color-light)" }}>
              Personal Projects
            </small>
          </article>
        </div>
        <p
          style={{
            margin: "2.5rem 0",
            color: "var(--color-light)",
            textAlign: "center",
          }}
        >
          Full stack web developer with 11 years of experience designing
          intuitive and beautiful user interfaces. Knowledgeable in all aspects
          of design best practices and emerging UI development techniques.
          Interested in roles that indulge innovative techniques to offer robust
          solutions to customers.
        </p>
        <Button
          href="#contact"
          variant="contained"
          style={{
            backgroundColor: "var(--color-bg-primary)",
          }}
          onClick={() => setActiveNav("#contact")}
        >
          Let's Talk
        </Button>
      </Container>
    </section>
  );
};

export default About;
