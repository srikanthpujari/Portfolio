import { makeStyles } from "@material-ui/core";
import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  socials: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: 90,
    alignItems: "center",
    bottom: "7rem",
    gap: "0.8rem",
    color: "var(--color-bg-primary)",
    width: "30%",
    cursor: "pointer",
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  social: {
    "&:hover": {
      color: "var(--color-white)",
    },
  },
}));

const HeaderSocials = () => {
  const classes = useStyles();
  return (
    <div className={classes.socials}>
      <FaLinkedin
        className={classes.social}
        onClick={() =>
          window.open("https://www.linkedin.com/in/pujari-srikanth-83a55925/")
        }
      />
      <FaGithubSquare
        className={classes.social}
        onClick={() => window.open("https://github.com/srikanthpujari")}
      />
      <FaTwitterSquare
        className={classes.social}
        onClick={() => window.open("https://twitter.com/home")}
      />

      <div
        style={{
          width: "2px",
          height: "2rem",
          backgroundColor: "var(--color-bg-primary)",
        }}
      ></div>
    </div>
  );
};

export default HeaderSocials;
