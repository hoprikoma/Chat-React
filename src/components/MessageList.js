import React, { Component, Fragment } from "react";
import MessageItem from "./MessageItem";

class MessageList extends Component {
  render() {
    const hasMessage = this.props.messages.length > 0;

    return (
      <Fragment>
        <ul>
          {this.props.messages.length > 0 &&
            this.props.messages.map((message, i) => {
              return (
                <MessageItem
                  handleOnClick={this.handleOnClick}
                  key={i}
                  message={message}
                />
              );
            })}
        </ul>

        {!hasMessage && <p>Il n'y a pas de message 😴</p>}
      </Fragment>
    );
  }
}

export default MessageList;
