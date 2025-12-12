import React from "react";
import { Link } from "react-router-dom";
import blogList from "../../data/BlogList";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";

const BlogList = () => {
    const posts = Array.isArray(blogList) ? blogList : [];

    return (
        <>
            <div className="blog-header">
                <AnimatedCopy tag="h1" animateOnScroll={true}>
                     Latest Blogs
                </AnimatedCopy>
            </div>

            <div className="blog-list">
                {posts.map((post, index) => (
                    <Link to={`/blog/${post.id}`} key={post.id} className="blog-item">
                        <div className="blog-item-header">
                            <span className="blog-item-index">
                                {String(index + 1).padStart(2, "0")} - {String(posts.length).padStart(2, "0")}
                            </span>
                            <span className="blog-item-date">{post.date}</span>
                        </div>

                        <div className="blog-item-main">
                            <h2>{post.title}</h2>
                            <div className="blog-item-image">
                                <img src={post.image} alt={post.title} />
                            </div>
                        </div>

                        <p className="secondary sm">{post.category}</p>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default BlogList;
