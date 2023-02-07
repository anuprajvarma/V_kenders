import React from "react";
import { SearchBar } from "../../components/Home";
import { FilterPanel } from "../../components/FilterPanel";
import { List } from "../../components/List";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <SearchBar />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          <FilterPanel />
        </div>
        <div className="home_list-wrap">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
