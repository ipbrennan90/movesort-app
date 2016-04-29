import React, {Component, PropTypes} from 'react';

export default class CounterButton extends Component {
  static propTypes = {
    className: PropTypes.string,
    buttonText: PropTypes.string
  }

  props = {
    className: ''
  }

  render() {
    const {buttonText} = this.props; // eslint-disable-line no-shadow
    let {className} = this.props;
    className += ' btn btn-default';
    return (
      <button className={className}>
        {buttonText}
      </button>
    );
  }
}
