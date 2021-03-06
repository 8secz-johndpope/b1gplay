import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import Typography from "@material-ui/core/Typography";
//import Grid from "@material-ui/core/Grid";
//import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
//import Badge from "@material-ui/core/Badge";

const styles = theme => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.3)",
      outline: "1px solid slategrey"
    }
  },
  root: {
    width: "100%",
    background: "white"
  },
  messageScroll: {
    overflowY: "scroll"
  },
  avatar: {
    margin: 4,
    width: 50,
    height: 50
  },

  message: {
    borderTop: "1px solid #d4d4d4"
    /* "&:hover": {
      background: "#D23E56",
      color: "white"
    } */
  },

  // Overiding CSS with classnames for ListItemText Implementation
  primary: {
    fontSize: "17px",
    fontWeight: "bold"
  },
  secondary: {
    fontSize: "15px",
    color: "black"
  }
});

function Messaging(props) {
  const { classes } = props;
  return (
    <div>
      <br />
      <Paper className={classes.root} elevation={0}>
        <div className={classes.messageScroll}>
          <Typography
            variant="subheading"
            gutterBottom
            align="center"
            style={{ fontWeight: "bold" }}
          >
            Notifications
          </Typography>
          <List>
            <ListItem button className={classes.message}>
              <ListItemAvatar>
                <Avatar
                  className={classes.avatar}
                  alt="Trial"
                  src={`/static/images/avatar/1.jpg`}
                />
              </ListItemAvatar>
              <ListItemText
                classes={{
                  primary: classes.primary,
                  secondary: classes.secondary
                }}
                primary=""
                secondary={
                  <React.Fragment>
                    <b>Peter Moses</b> {" followed you"}
                  </React.Fragment>
                }
              />

              {/* <Badge
                className={classes.margin}
                color="secondary"
                variant="dot"
              /> */}
            </ListItem>
            <ListItem button className={classes.message}>
              <ListItemAvatar>
                <Avatar
                  className={classes.avatar}
                  alt="Trial"
                  src={`/static/images/avatar/7.jpg`}
                />
              </ListItemAvatar>
              <ListItemText
                classes={{
                  primary: classes.primary,
                  secondary: classes.secondary
                }}
                primary=""
                secondary={
                  <React.Fragment>
                    <b>Philip Bosco</b> {" rated you"}
                  </React.Fragment>
                }
              />
              {/*               <Badge className={classes.margin} color="primary" variant="dot" /> */}
            </ListItem>

            <ListItem button className={classes.message}>
              <ListItemAvatar>
                <Avatar
                  className={classes.avatar}
                  alt="Trial"
                  src={`/static/images/avatar/7.jpg`}
                />
              </ListItemAvatar>
              <ListItemText
                classes={{
                  primary: classes.primary,
                  secondary: classes.secondary
                }}
                primary=""
                secondary={
                  <React.Fragment>
                    <b>Otim Tony</b> {" posted a photo"}
                  </React.Fragment>
                }
              />
              {/*         <Badge className={classes.margin} color="primary" variant="dot" /> */}
            </ListItem>
            <ListItem button className={classes.message}>
              <ListItemAvatar>
                <Avatar
                  className={classes.avatar}
                  alt="Trial"
                  src={`/static/images/avatar/7.jpg`}
                />
              </ListItemAvatar>
              <ListItemText
                classes={{
                  primary: classes.primary,
                  secondary: classes.secondary
                }}
                primary=""
                secondary={
                  <React.Fragment>
                    <b>Bright Wallace</b> {" uploaded a video"}
                  </React.Fragment>
                }
              />
              {/*  <Badge className={classes.margin} color="primary" variant="dot" /> */}
            </ListItem>

            <ListItem button className={classes.message}>
              <ListItemAvatar>
                <Avatar
                  className={classes.avatar}
                  alt="Trial"
                  src={`/static/images/avatar/7.jpg`}
                />
              </ListItemAvatar>
              <ListItemText
                classes={{
                  primary: classes.primary,
                  secondary: classes.secondary
                }}
                primary=""
                secondary={
                  <React.Fragment>
                    <b>Nathan Baleeta</b> {" is requesting to follow you"}
                  </React.Fragment>
                }
              />{" "}
              {/* <Badge className={classes.margin} color="primary" variant="dot" /> */}
            </ListItem>

            <ListItem button className={classes.message}>
              <ListItemAvatar>
                <Avatar
                  className={classes.avatar}
                  alt="Trial"
                  src={`/static/images/avatar/7.jpg`}
                />
              </ListItemAvatar>
              <ListItemText
                classes={{
                  primary: classes.primary,
                  secondary: classes.secondary
                }}
                primary=""
                secondary={
                  <React.Fragment>
                    <b>You</b> {" rated Nicholas Peters"}
                  </React.Fragment>
                }
              />
              {/* <Badge className={classes.margin} color="primary" variant="dot" /> */}
            </ListItem>
          </List>
        </div>
      </Paper>
    </div>
  );
}

Messaging.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Messaging);
