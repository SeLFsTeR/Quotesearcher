import React, { Component } from "react";
import Quote from "./Quote";
import axios from "axios";

class QuoteSearcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [] // we start with empty array
    };
  }

  // if compenent is mounted we fetch the data
  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const result = await axios.get(
        "https://quote-garden.herokuapp.com/quotes/search/tree"
      );

      this.setState({
        quotes: result.data.results,
        isLoading: false
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }
  }

  render() {
    // take state out of the brackets so we dont need to type this.state.quotes
    const { quotes, isLoading, error } = this.state;
    console.log(this.state);

    // if error, show error message
    if (error) {
      return <p>{error.message}</p>;
    }

    // if loading is still loading this is what we will see
    if (isLoading) {
      return <p>Fetching ...</p>;
    }

    // Quotes!
    return (
      <div>
        <h3>*** The Quote Searcher ***</h3>
        <button>Click me for Quote!</button>
        <ul>
          {quotes.map(quote => (
            <Quote
              quoteText={quote.quoteText}
              quoteAuthor={quote.quoteAuthor}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default QuoteSearcher;
