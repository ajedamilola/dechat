import React from "react";
import { Route, Routes } from "react-router-dom";
import NewsFeed from "./Pages/NewsFeed";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NewsFeed />} />
      </Routes>
    </div>
  );
}

export default App;
