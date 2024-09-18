import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./Pages/Feed";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
