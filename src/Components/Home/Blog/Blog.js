import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Blog.css';
import men from '../../../Images/1.png'
import BlogDetails from '../BlogDetails/BlogDetails';

const blogData = [
    { 
        name: 'Rashed Kabir',
        title: '2 times of brush a day can keep you healthy',
        image: men
    },
    { 
        name: 'Dr. Caudi',
        title: '2 times of brush a day can keep you healthy',
        image: men
    },
    { 
        name: 'Dr. John s',
        title: '2 times of brush a day can keep you healthy',
        image: men
    }
]

const Blog = () => {
    return (
       <section className="pb-70">
            <Container>
            <div className="blog-heading text-center">
                <h4>Our Blog</h4>
                <h1>From Our Blog News</h1>
            </div>
            <Row>
               {
                   blogData.map(blog => <BlogDetails blog={blog}></BlogDetails>)
               }
            </Row>
        </Container>
       </section>
    );
};

export default Blog;