import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Favsection from "../components/Favsection";

const Favorites = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState("Favorites");

  return (
    <div>
      <Navbar
        setSearchQuery={setSearchQuery}
        setSelected={setSelected}
        selected={selected}
      />
      <Favsection searchQuery={searchQuery} />
    </div>
  );
};

export default Favorites;
