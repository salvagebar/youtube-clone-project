import { useState } from "react";
const key = process.env.REACT_APP_KEY;
export default function Searchbar() {
  const [query, setQuery] = useState("");

  const handleQuery = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  const searchVideos = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=${query}&key=${key}`
    )
      .then((results) => results.json())
      .then((response) => console.log(response));
  };
  return (
    <form>
      <input type="text" value={query} onChange={handleQuery} />
      <button type="submit" onClick={searchVideos}>
        Search
      </button>
    </form>
  );
}
