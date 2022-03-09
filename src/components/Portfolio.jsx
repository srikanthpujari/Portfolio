import React from "react";
import { Button, Container, makeStyles, Typography } from "@material-ui/core";

import { ProjectData } from "../config/data";

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
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  portfolioContent: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "2rem",
  },

  portfolioDetails: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem 0",
    alignItems: "center",
    gap: "0.8rem",
    lineHeight: "0",
    backgroundColor: "var(--color-bg-variant)",
    borderRadius: "1rem",
    transition: "var(--transition)",
    "&:hover": {
      backgroundColor: "transparent",
      border: "1px solid var(--color-bg-primary-variant)",
    },
  },

  button: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "0.75rem",
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  return (
    <section id="portfolio">
      <div className={classes.tag}>
        <Typography variant="caption" style={{ color: "var( --color-light)" }}>
          Some recent Projects
        </Typography>
        <Typography variant="h5">My Portfolio</Typography>
      </div>
      <Container className={classes.container}>
        <div className={classes.portfolioContent}>
          {ProjectData.map((item) => (
            <article className={classes.portfolioDetails} key={item.id}>
              <div className={classes.portfolioImage}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "1.5rem",
                    objectPosition: "50% 50%",
                  }}
                />
              </div>
              <div style={{ width: "260px" }}>
                <Typography variant="h6" style={{ textAlign: "center" }}>
                  {item.title}
                </Typography>
                <div className={classes.button}>
                  <Button
                    variant="outlined"
                    style={{
                      color: "var(--color-bg-primary)",
                      borderColor: "var(--color-bg-primary)",
                      textTransform: "capitalize",
                    }}
                    href={item.github}
                    target="_blank"
                  >
                    Github
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "var(--color-bg-primary)",
                      textTransform: "capitalize",
                    }}
                    href={item.demo}
                    target="_blank"
                  >
                    Live Demo
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
