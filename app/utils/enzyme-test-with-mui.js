/**
 * Enzyme test utils with material ui
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export function shallowWithMuiContext(node) {
  return shallow(node, {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: { muiTheme: React.PropTypes.object },
  });
}

export function mountWithMuiContext(node) {
  return mount(node, {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: { muiTheme: React.PropTypes.object },
  });
}
