import React from 'react'
import { Link } from 'react-router-dom';
import '../style.css'
export default function Nav1() {
   return (
      
      <div>

         <nav>

            <ul className='d-flex justify-content-around list-unstyled mt-5' >
          <li>
             <Link to="/" style={{ textDecoration: 'none' }}>HOME</Link>
          </li>
          <li>
             <Link to="/add" style={{ textDecoration: 'none' }}>ADD BLOG</Link>
          </li>
         
       </ul> 
         </nav>
<hr />
      </div>
   )
}