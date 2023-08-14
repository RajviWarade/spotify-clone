import React from "react";
import Login from "./pages/Login/Login";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search/Search";
import Profile from "./pages/Profile/Profile";
import Searchlist from "./pages/Searchlist/Searchlist";
import Featured from "./pages/Featured/Featured";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search-list" element={<Searchlist />} />
          <Route path="/featured-playlist" element={<Featured />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
