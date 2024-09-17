import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import News from './component/News';
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 9;
  const apikey = process.env.REACT_APP_API_KEY3;

  const [progress, setProgress] = useState(5);

  return (
    <Router>
      <div>
        <LoadingBar color='#f11946' height={3} progress={progress} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/NewsApp" replace />} />
          <Route path="/General" element={<News setProgress={setProgress} apikey={apikey} key="General" pageSize={pageSize} country="us" category="general" />} />
          <Route path="/Business" element={<News setProgress={setProgress} apikey={apikey} key="Business" pageSize={pageSize} country="us" category="business" />} />
          <Route path="/Entertainment" element={<News setProgress={setProgress} apikey={apikey} key="Entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
          <Route path="/Technology" element={<News setProgress={setProgress} apikey={apikey} key="Technology" pageSize={pageSize} country="us" category="technology" />} />
          <Route path="/Sports" element={<News setProgress={setProgress} apikey={apikey} key="Sports" pageSize={pageSize} country="us" category="sports" />} />
          <Route path="/Health" element={<News setProgress={setProgress} apikey={apikey} key="Health" pageSize={pageSize} country="us" category="health" />} />
          <Route path="/Science" element={<News setProgress={setProgress} apikey={apikey} key="Science" pageSize={pageSize} country="us" category="s cience" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
