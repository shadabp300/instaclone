import React from "react";
import Landing from "./LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import PostView from "./PostView/PostView";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="PostView" element={<PostView />} />
      </Routes>
    </>
  );
};
export default App;
