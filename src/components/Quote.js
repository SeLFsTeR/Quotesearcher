import React, { Component } from "react";

class Quote extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.quoteText} by {this.props.quoteAuthor}
        </p>
        <button>Like this Quote</button>
        <button>Dislike this Quote</button>
      </div>
    );
  }
}

export default Quote;
