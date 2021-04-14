import React from 'react';
import { Col } from 'react-bootstrap';
import './BlogDetails.css'

const BlogDetails = ({blog}) => {
    return (
        <Col lg={4}>
            <div className="blog-box">
                <div className="d-flex">
                    <img src={blog.image} alt="blog images"/>
                    <div>
                        <h4>{blog.name}</h4>
                        <p>{blog.date}</p>
                    </div>
                </div>
                <h3>{blog.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio suscipit fuga vero facilis?</p>
            </div>
        </Col>
    );
};

export default BlogDetails;