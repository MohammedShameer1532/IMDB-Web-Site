import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Get from "./Get";

const App = () => {
  const [search, setSearch] = useState("");
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChangeEvent = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = () => {
    setLoading(true);
    setError(null);

    const apiKey = 'aa903cd7';

    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${search}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGetData(data.Search);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Input onChange={handleChangeEvent} />

      <Button onClick={handleClick} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Get getData={getData} />
    </div>
  );
};

export default App;
