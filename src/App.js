import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Feed from "./components/Feed"
import Header from "./components/Header"
import SearchResult from "./components/SearchResult"
import VideoDetails from "./components/VideoDetails"

import { AppContext } from "./context/contextApi";
function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Header />
        <div className="flex flex-col h-full">
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
