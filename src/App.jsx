import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/contact/Contact";
import BlogDetail from "./pages/blog/BlogDetais";
import BlogList from "./pages/blog/Blog";

// Services
import ServicePage from "./pages/services/ServicePage"; // dynamic service page

// Reusable Layout
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        {/* Blog */}
        <Route
          path="/blog"
          element={
            <Layout>
              <BlogList />
            </Layout>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <Layout>
              <BlogDetail />
            </Layout>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />

        {/* Services Dynamic Pages */}
        <Route
          path="/services/:slug"
          element={
            <Layout>
              <ServicePage />
            </Layout>
          }
        />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <Layout>
              <div className="flex items-center justify-center flex-grow">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-[#0f3b66] mb-4">
                    404
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Page not found
                  </p>
                  <a
                    href="/"
                    className="inline-block bg-[#0f3b66] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2d8efa] transition-colors"
                  >
                    Go Home
                  </a>
                </div>
              </div>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
