import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import ButtonArrow from "./ui/ButtonArrow";

import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import webSiteIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  specialTest: {
    fontFamily: "Pacifico",
    color: [theme.palette.common.arcOrange],
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  subtitle: {
    marginBottom: "1rem",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
}));

const Services = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: matchSM ? 0 : "5em",
          marginTop: matchSM ? "1em" : "2em",
        }}
      >
        <Typography
          align={matchSM ? "center" : undefined}
          variant="h2"
          gutterBottom
        >
          Services
        </Typography>
      </Grid>
      {/*--------- Mobile Block -------- */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
          style={{ marginTop: matchSM ? "1em" : "5em" }}
        >
          <Grid
            item
            style={{
              textAling: matchSM ? "center" : undefined,
              width: matchSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4">iOS/Android Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchSM ? null : <br />}with either mobile platform.
            </Typography>
            <Button
              component={Link}
              to="/mobileapp"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.arcBlue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="mobile phone icon"
              src={mobileAppsIcon}
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
      {/*--------- End Mobile Block -------- */}
      {/*--------- Services Block -------- */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchSM ? 0 : "5em",
              textAling: matchSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialTest}>celebration</span>
            </Typography>
            <Button
              component={Link}
              to="/customsoftware"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.arcBlue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="customsoftwareicon"
              src={customSoftwareIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*--------- End Services Block -------- */}
      {/*--------- WebSite Block -------- */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
          style={{ marginBottom: "10em" }}
        >
          <Grid
            item
            style={{
              textAling: matchSM ? "center" : undefined,
              width: matchSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4">WebSite Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed
            </Typography>
            <Button
              component={Link}
              to="/websites"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.arcBlue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="website icon"
              src={webSiteIcon}
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
