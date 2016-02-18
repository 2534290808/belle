/* @flow */

import React from 'react';
import type ReactComponent from 'react';
import type ReactElement from 'react';

/**
 * Returns a the provided component as themed component.
 *
 * Note: defaultProps could be useful for default special behavioural in
 * different ui libraries.
 */
export default function (Component: ReactComponent, theme: Object, defaultProps?: Object): Function {
  return (props: any): ReactElement => (
    <Component {...defaultProps} theme={theme} {...props} />
  );
}
