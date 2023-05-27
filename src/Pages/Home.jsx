import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style.css';


export default function Home() {
  const[blog,setBlog] = useState([]);
  const getData = async () =>{
  const data = await fetch('https://jsonplaceholder.typicode.com/todos');
  const jsonData = await data.json();
  setBlog(jsonData)
  }

  useEffect(()=>{
    getData();
  },[]
  )
  return (
    <div>
      <Container className = 'text-center mt-5'>
      <h1 className='d-flex justify-content-center mt-5'>BLOG</h1>
 
<Row>
  {blog.map((item, index) => (
    <Col sm = {4}  key={index} className="card-pad mt-4">
      <Card className='card-pad'>
        <Card.Body>
          <Card.Title className='he1'>{item.title}</Card.Title>
          <Card.Text style={{height :'20 rem'}}>
            {blog.completed?"completed":"pending"}
            </Card.Text>
          <Button variant="primary">Explore</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>


        </Container>     
      
    </div>
  )
}
