import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import ComingSoon from "./pages/comingSoon";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<ComingSoon />} />
      <Route path="/coming-soon" exact element={<ComingSoon />} />
    </Routes>
  );
}

export default App;
