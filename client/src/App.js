import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";

import {
  Home,
  SearchResults,
  ServiceDirectory,
  FAQS,
  ContactUs,
  Chat,
} from "./pages";

import "./styles/index.css"; // Import global styles

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/search" element={<SearchResults />} /> */}
            <Route path="/services" element={<ServiceDirectory />} />
            <Route path="/faqs" element={<FAQS />} />
            {/* <Route path="/contact" element={<ContactUs />} /> */}
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
