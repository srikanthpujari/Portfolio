import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CV from "../assets/CV.pdf";
import ME from "../assets/me.jpg";
import { PortfolioState } from "../context/PortfolioProvider";
import HeaderSocials from "./HeaderSocials";

const useStyles = makeStyles((theme) => ({
  header: {
    // height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "3rem",
    marginBottom: "3rem",
    overflow: "hidden",
    /*  [theme.breakpoints.down("md")]: {
      height: "68vh",
    }, */
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
    },
  },
  button: {
    display: "flex",
    gap: "1rem",
    marginTop: "2rem",
  },
  me: {
    marginTop: "4rem",
    height: "20rem",
  },

  scroll: {
    position: "absolute",
    bottom: "11rem",
    right: "15rem",
    color: "var(--color-bg-primary)",
    transform: "rotate(90deg)",
    fontWeight: "300",
    fontSize: "0.9rem",
    cursor: "pointer",
    "&:hover": {
      color: "var(--color-white)",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  const { setActiveNav } = PortfolioState();

  return (
    <header id="home">
      <Container>
        <div className={classes.header}>
          <Typography variant="caption">Hello I'm</Typography>
          <Typography variant="h3">Sri Pujari</Typography>
          <Typography
            style={{ color: "var( --color-light)" }}
            variant="overline"
          >
            FullStack Developer
          </Typography>
          <div className={classes.button}>
            <Button
              href={CV}
              download
              variant="outlined"
              style={{
                color: "var(--color-bg-primary)",
                borderColor: "var(--color-bg-primary)",
                fontSize: 10,
              }}
            >
              Download CV
            </Button>
            <Button
              href="#contact"
              variant="contained"
              style={{
                backgroundColor: "var(--color-bg-primary)",
                fontSize: 10,
              }}
              onClick={() => setActiveNav("#contact")}
            >
              Lets Talk
            </Button>
          </div>
          <HeaderSocials />
          <div className={classes.me}>
            <img
              src={ME}
              alt="me"
              style={{
                width: "250px",
                height: "490px",
                objectFit: "cover",
                objectPosition: "50% 50%",
                borderRadius: "10rem 10rem 0 0",
              }}
            />
          </div>
          <a
            href="#contact"
            className={classes.scroll}
            onClick={() => setActiveNav("#contact")}
          >
            Scroll Down
          </a>
        </div>
      </Container>
    </header>
  );
};

export default Header;
