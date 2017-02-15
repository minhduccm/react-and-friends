/*
 * Header bar
 */

import React from 'react';

import { Link } from 'react-router';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import ActionHome from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';

export default class HeaderBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <IconButton
            iconStyle={styles.mediumIcon}
            style={styles.medium}
          >
            <Link to="/">
              <ActionHome />
            </Link>
          </IconButton>
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
          <Link to="/">
            <FlatButton label="Home" />
          </Link>
          <Link to="/repos">
            <FlatButton label="My Repos" />
          </Link>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

const styles = {
  mediumIcon: {
    width: 48,
    height: 48,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};
