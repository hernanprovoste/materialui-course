import React from "react";
import Lottie from "react-lottie";
import {
  makeStyles,
  Grid,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import ButtonArrow from "../components/ui/ButtonArrow";
import webSiteIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
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
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "8em 0",
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

const LandingPage = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/*--------- Hero Block -------- */}
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringding West Coast Technology <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  component={Link}
                  to="/estimate"
                  className={classes.estimateButton}
                  variant="contained"
                  onClick={() => props.setValue(5)}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  className={classes.learnButtonHero}
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.arcBlue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      {/*--------- End Hero Block -------- */}
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
      {/*--------- Mobile Block -------- */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAling: matchSM ? "center" : undefined,
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
            />
          </Grid>
        </Grid>
      </Grid>
      {/*--------- End Mobile Block -------- */}
      {/*--------- WebSite Block -------- */}
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
          <Grid item>
            <img
              className={classes.icon}
              alt="website icon"
              src={webSiteIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*--------- End WebSite Block -------- */}
      {/*--------- The Revolution Block -------- */}
      <Grid item>
        <Grid
          container
          style={{ height: "100em", marginTop: "12em" }}
          alignItems="center"
          justify="center"
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom={2}>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution
                  </Typography>
                  <Button
                    component={Link}
                    to="/revolution"
                    variant="outlined"
                    className={classes.learnButton}
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill={theme.palette.common.arcBlue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      {/*--------- End The Revolution Block -------- */}
      {/*--------- Information Block -------- */}
      <Grid item>
        <Grid
          container
          style={{ height: "80em" }}
          alignItems="center"
          direction="row"
        >
          <Grid
            item
            container
            style={{
              position: "absolute",
              textAlign: matchXS ? "center" : "inherit",
            }}
            direction={matchXS ? "column" : "row"}
            spacing={matchXS ? 10 : 0}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matchXS ? 0 : matchSM ? "2em" : "5em" }}
            >
              <Grid
                container
                style={{ marginBottom: matchSM ? "10em" : 0 }}
                direction="column"
              >
                <Typography variant="h2" style={{ color: "white" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal.</Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                    className={classes.learnButton}
                    component={Link}
                    to="/about"
                    onClick={() => props.setValue(3)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchXS ? 0 : matchSM ? "2em" : "5em",
                textAlign: matchXS ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">
                  Say hello!{" "}
                  <span role="img" aria-label="hand">
                    ???
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                    className={classes.learnButton}
                    component={Link}
                    to="/contact"
                    onClick={() => props.setValue(4)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.infoBackground} />
        </Grid>
      </Grid>
      {/*--------- End Information Block -------- */}
      {/*--------- Call to Action Block -------- */}
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
      {/*--------- End Call to Action Block -------- */}
    </Grid>
  );
};

export default LandingPage;
