import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./Components/Header";
import Feed from "./Components/Feed";
import SearchResult from "./Components/SearchResult";
import VideoDetails from "./Components/VideoDetails";
import { AppContext } from "./Context/contextApi";

const App = () => {
  return (
 
    <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
  );
};

export default App;
