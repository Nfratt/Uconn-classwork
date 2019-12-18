import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

export default function SearchResultContainer() {
  const [search, setSearch] = useState('');
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  // When this component mounts, search the Giphy API for pictures of kittens
  useEffect(() => {
    searchGiphy(search || 'kittens');
  }, [search]); // Only re-run the effect if value of search changes

  const searchGiphy = query => {
    API.search(query)
      .then(res => setResults(res.data.data))
      .catch(err => console.log(err));
  };

  const handleInputChange = event => {
    const value = event.target.value;
    setInput(value);
  };

  // When the form is submitted, trigger search by setting search to the value of input
  const handleFormSubmit = event => {
    event.preventDefault();
    setSearch(input);
  };

    return (
      <div>
        <SearchForm
          input={input}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
        />
        <ResultList results={results} />
      </div>
    );
}
