import { useState } from "react";
export default function Searchbar() {
  const [query, setQuery] = useState("");

  return (
    <form>
      <input type="text" value={query} />
    </form>
  );
}
