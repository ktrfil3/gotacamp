import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogList from "./BlogList";
import BlogPost from "./BlogPost";
import ReactLenis from "lenis/react";
import Transition from "../../components/Transition/Transition";
import "./Blog.css";

const Blog = () => {
    return (
        <ReactLenis root>
            <div className="page blog-page">
                <Routes>
                    <Route path="/" element={<BlogList />} />
                    <Route path="/:id" element={<BlogPost />} />
                </Routes>
            </div>
        </ReactLenis>
    );
};

export default Transition(Blog);
