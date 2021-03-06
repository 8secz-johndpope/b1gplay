import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PollIcon from "@material-ui/icons/Poll";
import StarIcon from "@material-ui/icons/Star";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import NewStars1 from "../NewStars/NewStars1";
import NewPersonalRating from "../NewRatings/NewPersonalRating";
import Filter from "../NewRatings/Filter";

import Header from "../Layout/Header";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = {
  //Style the scrollbar
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
    flexGrow: 1,
    maxWidth: "100%"
  }
};

class PersonalRatings extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Fragment>
        <Header />
        <Paper square className={classes.root}>
          <br />
          <Typography variant="display1" align="center" color="inherit">
            Personal Ratings
          </Typography>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab icon={<PollIcon />} label="GRAPHIC ANALYSIS" />
            <Tab icon={<StarIcon />} label="INDIVIDUAL RATINGS" />
          </Tabs>
          {value === 0 && (
            <TabContainer>
              <NewPersonalRating />
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              <Grid container spacing={24}>
                <Grid
                  item
                  lg={3}
                  xs={12}
                  style={{
                    //position: "fixed",
                    margin: 0
                  }}
                >
                  <Filter />
                </Grid>
                <Grid
                  item
                  lg={9}
                  sm={12}
                  xs={12}
                  style={
                    {
                      //marginLeft: "16%"
                    }
                  }
                >
                  <NewStars1 />
                </Grid>
              </Grid>
            </TabContainer>
          )}
        </Paper>
      </Fragment>
    );
  }
}

PersonalRatings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalRatings);
