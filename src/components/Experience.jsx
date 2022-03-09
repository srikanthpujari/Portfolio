import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiChakraui,
  SiExpress,
  SiFirebase,
  SiMaterialui,
  SiMongodb,
  SiOracle,
  SiRedux,
} from "react-icons/si";

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
  experience: {
    width: "50%",
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
    [theme.breakpoints.down("sm")]: {
      width: "75%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  icon: {
    color: "var(--color-bg-primary)",
    fontSize: "1.5rem",
  },
  experienceContent: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    gap: "1rem",
    height: "250px",
    [theme.breakpoints.down("xs")]: {
      flexWrap: "nowrap",
      height: "auto",
    },
  },
  experienceDetails: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    lineHeight: "0",
  },
}));

const Experience = () => {
  const classes = useStyles();
  return (
    <section id="experience">
      <div className={classes.tag}>
        <Typography variant="caption" style={{ color: "var( --color-light)" }}>
          The skills I have
        </Typography>
        <Typography variant="h5">My Skillset</Typography>
      </div>
      <Container className={classes.container}>
        <div className={classes.experience}>
          <Typography variant="h6" style={{ color: "var(--color-bg-primary" }}>
            Frontend Development
          </Typography>
          <div className={classes.experienceContent}>
            <article className={classes.experienceDetails}>
              <FaHtml5 className={classes.icon} />
              <span>
                <Typography variant="subtitle2">HTML</Typography>
                <Typography
                  variant="caption"
                  style={{ color: "var(--color-light)" }}
                >
                  Experienced
                </Typography>
              </span>
            </article>
            <article className={classes.experienceDetails}>
              <FaCss3 className={classes.icon} />
              <span>
                <Typography variant="subtitle2">CSS</Typography>
                <Typography
                  variant="caption"
                  style={{ color: "var(--color-light)" }}
                >
                  Intermediate
                </Typography>
              </span>
            </article>
            <article className={classes.experienceDetails}>
              <IoLogoJavascript className={classes.icon} />
              <span>
                <Typography variant="subtitle2">Javascript</Typography>
                <Typography
                  variant="caption"
                  style={{ color: "var(--color-light)" }}
                >
                  Experienced
                </Typography>
              </span>
            </article>
            <article className={classes.experienceDetails}>
              <FaReact className={classes.icon} />
              <span>
                <Typography variant="subtitle2">React</Typography>
                <Typography
                  variant="caption"
                  style={{ color: "var(--color-light)" }}
                >
                  Experienced
                </Typography>
              </span>
            </article>
            <article className={classes.experienceDetails}>
              <SiRedux className={classes.icon} />
              <span>
                <Typography variant="subtitle2">Redux</Typography>
                <Typography
                  variant="caption"
                  style={{ color: "var(--color-light)" }}
                >
                  Experienced
                </Typography>
              </span>
            </article>
            <article className={classes.experienceDetails}>
              <SiMaterialui className={classes.icon} />
              <span>
                <Typography variant="subtitle2">MaterialUI</Typography>
                <Typography
                  variant="caption"
                  style={{ color: "var(--color-light)" }}
                >
                  Experienced
                </Typography>
              </span>
            </article>
            <article className={classes.experienceDetails}>
              <SiChakraui className={classes.icon} />
              <span>
                <Typography variant="subtitle2">ChakraUI</Typography>
                <Typography
                  variant="caption"
                  style={{ color: "var(--color-light)" }}
                >
                  Experienced
                </Typography>
              </span>
            </article>
          </div>
        </div>
        <div className={classes.experience}>
          <Typography variant="h6" style={{ color: "var(--color-bg-primary" }}>
            Backend Development
          </Typography>
          <div className={classes.experienceContent}>
            <article className={classes.experienceDetails}>
              <FaNodeJs className={classes.icon} />
              <span>
                <Typography variant="subtitle2">NodeJS</Typography>
                <Typography
                  variant="caption"
                  style={{ color: "var(--color-light)" }}
                >
                  Experienced
                </Typography>
              </span>
            </article>
            <article className={classes.experienceDetails}>
              <SiExpress className={classes.icon} />
              <span>
                <Typography variant="subtitle2">Express</Typography>
                <Typography
                  variant="caption"
                  style={{ color: "var(--color-light)" }}
                >
                  Experienced
                </Typography>
              </span>
            </article>
            <article className={classes.experienceDetails}>
              <SiMongodb className={classes.icon} />
              <span>
                <Typography variant="subtitle2">MongoDB</Typography>
                <Typography
                  variant="caption"
                  style={{ color: "var(--color-light)" }}
                >
                  Experienced
                </Typography>
              </span>
            </article>
            <article className={classes.experienceDetails}>
              <SiOracle className={classes.icon} />
              <span>
                <Typography variant="subtitle2">Oracle</Typography>
                <Typography
                  variant="caption"
                  style={{ color: "var(--color-light)" }}
                >
                  Experienced
                </Typography>
              </span>
            </article>
            <article className={classes.experienceDetails}>
              <SiFirebase className={classes.icon} />
              <span>
                <Typography variant="subtitle2">Firebase</Typography>
                <Typography
                  variant="caption"
                  style={{ color: "var(--color-light)" }}
                >
                  Intermediate
                </Typography>
              </span>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
