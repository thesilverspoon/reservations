import React from 'react';
import PropTypes from 'prop-types';

class SetName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameVal: '',
    };
  }

  handleButtonClick() {
    if (this.state.nameVal.length > 0) {
      this.props.clickHandler(this.state.nameVal);
      this.setState({
        nameVal: '',
      });
    }
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleButtonClick();
    }
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        {name
        ? `Welcome, ${name}`
        : (
          <div>
            <input
              type="text"
              placeholder="Enter name"
              id="nameInput"
              value={this.state.nameVal}
              onChange={(e) => { this.setState({ nameVal: e.target.value }); }}
              onKeyPress={e => this.handleKeyPress(e)}
            />
            <button
              id="nameButton"
              onClick={() => this.handleButtonClick()}
            >
              Enter Name
            </button>
          </div>)
      }
      </div>);
  }
}


SetName.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default SetName;
