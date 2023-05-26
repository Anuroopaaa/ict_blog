import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav1 from './Units/Nav1';
import Home from './Pages/Home';
import AddBlog from './Pages/AddBlog';

export default function App() {
  return (
    <div>
      <Container>
        <Nav1></Nav1>
        <h1 className='d-flex justify-content-center mt-5'>BLOG</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBlog/>} />
       </Routes>


      </Container>
      

    </div>
  )
}
