
import React from "react";
import Button from 'react-bootstrap/Button';

export default class QuoteAndAuthor extends React.Component {
  render() {

    return (
      <div > <div className="quotebox">
          <h1 id="quote">"{this.props.quote}"</h1>
          <h5 id="author">
            -{this.props.author ? this.props.author : "Unknown"}-
          </h5>
       
      </div>

      <Button variant="outline-dark"
          id="newquote"
          onClick={this.props.handleClick}
        >
          New quote
        </Button>
    </div>
    );
  }
}

