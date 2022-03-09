import { makeStyles, Typography, Container } from "@material-ui/core";
import React from "react";

import { BiCheck } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
  tag: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2rem",
    marginTop: "3rem",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    width: "70%",
    gap: "2rem",
    [theme.breakpoints.down("md")]: {
      width: "75%",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  experience: {
    width: "50%",
    background: "var( --color-bg-variant)",
    borderRadius: "1rem",
    transition: "var(--transition)",
    "&:hover": {
      background: "transparent",
      border: "1px solid var(--color-bg-primary-variant)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  experienceDetails: {
    padding: "1.2rem",
  },
  li: {
    display: "flex",
    gap: "1rem",
    marginBottom: "0.5rem",
  },
  clientName: {
    backgroundColor: "var(--color-bg-primary)",
    padding: "0.8rem",
    borderRadius: "1rem 1rem 0 0",
    boxShadow: "0 2rem 1rem rgba(0,0,0,0.1)",
  },
  icon: {
    color: "var(--color-bg-primary)",
    marginTop: "10px",
    width: "1rem",
    height: "1rem",
    // fontSize: "2rem",
  },
}));

const Clients = () => {
  const classes = useStyles();

  return (
    <section id="clients">
      <div className={classes.tag}>
        <Typography variant="caption" style={{ color: "var( --color-light)" }}>
          The years I spent
        </Typography>
        <Typography variant="h5">My Experience</Typography>
      </div>
      <Container className={classes.container}>
        <div className={classes.experience}>
          <Typography
            className={classes.clientName}
            variant="h6"
            style={{ color: "black", textAlign: "center" }}
          >
            City of Austin
          </Typography>
          <div className={classes.experienceContent}>
            <article className={classes.experienceDetails}>
              <ul>
                <li className={classes.li}>
                  <BiCheck className={classes.icon} />
                  Used MERN stack to design high performance web app.
                </li>
                <li className={classes.li}>
                  <BiCheck className={classes.icon} />
                  Used ChakrUI as a component library.
                </li>
                <li className={classes.li}>
                  <BiCheck className={classes.icon} />
                  Redux was used for state management.
                </li>
                <li className={classes.li}>
                  <BiCheck className={classes.icon} />
                  Implemented latest ES6 features for maintainability.
                </li>
                <li className={classes.li}>
                  <BiCheck className={classes.icon} />
                  Exclusive use of React Hooks for life-cycle processes.
                </li>
                <li className={classes.li}>
                  <BiCheck className={classes.icon} />
                  Used Axios, a promise-based HTTP client for the browser and
                  Node.
                </li>
              </ul>
            </article>
          </div>
        </div>
        <div className={classes.experience}>
          <Typography
            className={classes.clientName}
            variant="h6"
            style={{ color: "black", textAlign: "center" }}
          >
            Dell Inc.
          </Typography>
          <div className={classes.experienceContent}>
            <article className={classes.experienceDetails}>
              <ul>
                <li className={classes.li}>
                  <BiCheck className={classes.icon} />
                  Involved in Designing web pages with React.
                </li>
                <li className={classes.li}>
                  <BiCheck className={classes.icon} />
                  Used MaterialUI as a component library.
                </li>
                <li className={classes.li}>
                  <BiCheck className={classes.icon} />
                  Used Context API for state management.
                </li>
                <li className={classes.li}>
                  <BiCheck className={classes.icon} />
                  Developed independent RESTful web API's and consumed it in web
                  applications over HTTP.
                </li>
                <li className={classes.li}>
                  <BiCheck className={classes.icon} />
                  Used Axios, a promise-based HTTP client for the browser and
                  Node.
                </li>
                <li className={classes.li}>
                  <BiCheck className={classes.icon} />
                  Used latest ES6 coding standards.
                </li>
              </ul>
            </article>
          </div>
        </div>
        <div className={classes.experience}>
          <Typography
            className={classes.clientName}
            variant="h6"
            style={{ color: "black", textAlign: "center" }}
          >
            Emblem Health
          </Typography>
          <div className={classes.experienceContent}>
            <article className={classes.experienceDetails}>
              <ul>
                <li className={classes.li}>
                  <BiCheck className={classes.icon} />
                  Writing/maintaining new and existing Database objects.
                </li>
                <li className={classes.li}>
                  <BiCheck className={classes.icon} />
                  PL/SQL development with a focus on creating re-usable objects
                  such as stored procedures and functions.
                </li>
                <li className={classes.li}>
                  <BiCheck className={classes.icon} />
                  Wrote custom webservices based off of DB objects to be
                  consumed by frontend application.
                </li>
                <li className={classes.li}>
                  <BiCheck className={classes.icon} />
                  Developed customAPI web service layer for above portal
                  application to handle on Database transactions.
                </li>
                <li className={classes.li}>
                  <BiCheck className={classes.icon} />
                  Developed independent RESTful web API's and consumed it in web
                  applications over HTTP.
                </li>
                <li className={classes.li}>
                  <BiCheck className={classes.icon} />
                  Involved in maintaining existing portal application
                </li>
              </ul>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Clients;
