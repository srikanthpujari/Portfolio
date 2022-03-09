import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { send } from "emailjs-com";

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
      width: "75%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  contactContent: {
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      width: "75%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  formContent: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    gap: "1.5rem",
    padding: "1rem",
    backgroundColor: "transparent",
    borderRadius: "1rem",
    transition: "var(--transition)",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  contactDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "1rem",
    backgroundColor: "var(--color-bg-variant)",
    borderRadius: "1rem",
    padding: "1rem",
    transition: "var(--transition)",
    "&:hover": {
      backgroundColor: "transparent",
      border: "1px solid var(--color-bg-primary-variant)",
    },
  },
  icon: {
    color: "var(--color-bg-primary)",
    marginBottom: "1rem",
    fontSize: "1.6rem",
  },
  anchor: {
    color: "var(--color-bg-primary)",
  },
  input: {
    border: "1px solid var(--color-bg-primary)",
    borderRadius: "1rem",
    color: "var(--color-white) !important",
    "& ::-webkit-input-placeholder": {
      color: "var(--color-white) !important",
    },
  },
  inputWhite: {
    color: "white",
  },
  button: {
    backgroundColor: "var(--color-bg-primary)",
    "&:hover": {
      backgroundColor: "transparent",
      color: "var(--color)",
      border: "3px solid var(--color-bg-primary)",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } =
      process.env;

    send(
      REACT_APP_SERVICE_ID,
      REACT_APP_TEMPLATE_ID,
      toSend,
      REACT_APP_USER_ID
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    setToSend({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <section id="contact">
      <div className={classes.tag}>
        <Typography variant="caption" style={{ color: "var( --color-light)" }}>
          Get in touch
        </Typography>
        <Typography variant="h5">Contact Me</Typography>
      </div>
      <Container className={classes.container}>
        <div className={classes.contactContent}>
          <article className={classes.contactDetails}>
            <MdEmail className={classes.icon} />
            <Typography variant="subtitle2">Email</Typography>
            <a
              href="mailto:srikanth.pujari@gmail.com"
              className={classes.anchor}
            >
              Send Message
            </a>
          </article>
          <article className={classes.contactDetails}>
            <FaLinkedin className={classes.icon} />
            <Typography variant="subtitle2">Linkedin</Typography>
            <a
              href="https://www.linkedin.com/in/pujari-srikanth-83a55925/"
              target="_blank"
              rel="noreferrer"
              className={classes.anchor}
            >
              Visit Linkedin
            </a>
          </article>
          <article className={classes.contactDetails}>
            <IoLogoWhatsapp className={classes.icon} />
            <Typography variant="subtitle2">Whatsapp</Typography>
            <a
              href="https://api.whatsapp.com/send?phone=+18454536886"
              target="_blank"
              rel="noreferrer"
              className={classes.anchor}
            >
              Send a Message
            </a>
          </article>
        </div>
        <div div className={classes.formContent}>
          <TextField
            placeholder="Your Full Name"
            required
            variant="outlined"
            className={classes.input}
            InputProps={{
              className: classes.input,
            }}
            name="name"
            value={toSend.name}
            onChange={handleChange}
          />
          <TextField
            placeholder="Your Email"
            required
            variant="outlined"
            className={classes.input}
            InputProps={{
              className: classes.input,
            }}
            name="email"
            value={toSend.email}
            onChange={handleChange}
          />
          <TextField
            placeholder="Message"
            required
            variant="outlined"
            multiline
            rows={4}
            className={classes.input}
            InputProps={{
              className: classes.input,
            }}
            name="message"
            value={toSend.message}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            className={classes.button}
            type="submit"
            onClick={sendEmail}
          >
            Send Message
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
