import React, { useState } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import "./App.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="tc">
      <h1>Robofriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
}
