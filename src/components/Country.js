/* eslint-disable */
import React from 'react';

export default class Country extends React.Component {
  render() {
    return (
      <div>
        <div>MY COUNTRY IS {this.props.location.state.country}</div>
        <div>blablabla in {this.props.location.state.country}</div>
      </div>
    );
  }
}
