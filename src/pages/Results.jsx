// Results.jsx
import React, { useContext, useState } from 'react';
import { SearchContext } from '../context/search';
import { Input, IconButton, FormControl, FormLabel } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Results = () => {
  const [input, setInput] = useState('');
  const search = useContext(SearchContext);

  const handleSearch = (event) => {
    event.preventDefault();
    search.search(input).then((data) => {
      console.log(data);
      search.setData(data.results);
      localStorage.setItem('myData', JSON.stringify(data.results));
      window.history.pushState(null, '', '/SingleView');
    });
  };

  return (
    <form onSubmit={handleSearch}>
      <FormControl>
        <FormLabel>Search Anime</FormLabel>
        <Input
          placeholder="Search Anime..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <IconButton
          aria-label="Search database"
          icon={<SearchIcon />}
          colorScheme="blue"
          disabled={!input}
          type="submit"
        />
      </FormControl>
    </form>
  );
};

export default Results;
