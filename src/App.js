import './App.css';
import { useEffect, useState } from 'react';
import BlogList from './components/BlogList';
import Blog from './components/Blog';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogSort from './components/BlogSort';
import BlogSearch from './components/BlogSearch';
import Footer from './components/Footer';
function App() {

  return (

    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<BlogList Link={Link} />} />
        <Route path='/post/:id' element={<Blog />} />
        <Route path='/sort/:key' element={<BlogSort />} />
        <Route path='/search/:key' element={<BlogSearch />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
