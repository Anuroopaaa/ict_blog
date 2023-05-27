import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav1 from './Units/Nav1';
import Home from './Pages/Home';
import AddBlog from './Pages/AddBlog';

export default function App() {
  return (
    <div>
      <div>
      <Nav1></Nav1>

      </div>

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBlog/>} />
       </Routes>

      </Container>
      

    </div>
  )
}