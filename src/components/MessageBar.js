import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class MessageBar extends PureComponent {
  state = { message: "", username: "", hasError: false };

  handleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value, hasError: false , hasErrorChara: false});
  };

  handleOnSubmit = e => {
    e.preventDefault();

    if (this.state.message.length > 100) {
      this.setState({ hasErrorChara: true });
    }
    else if (this.state.message) {
      this.setState({ message: "" });
      this.props.handleOnSubmit(this.state.message);
    } else {
      this.setState({ hasError: true });
    }
    
    
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            id="message"
            value={this.state.message}
            onChange={this.handleOnChange}
            placeholder="Votre message 📄"
            type="text"
          />
          <button type="submit" > Envoyer 🚀 </button>
          <br />
            {this.state.hasError && <p>Il faut mettre un message 😐</p> }
            {this.state.hasErrorChara && <p>Vous avez dépassez les 100 caractères 🤐</p>}
        </form>
      </div>
    );
  }
}

MessageBar.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired
};

export default MessageBar;
