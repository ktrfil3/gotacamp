import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import blogList from "../../data/BlogList";

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = blogList.find((p) => p.id === parseInt(id));

    // Scroll to top when mounting
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div style={{ padding: "10em 2em", textAlign: "center" }}>
                <h2>Article not found</h2>
                <Link to="/blog" className="blog-back-link">Back to Blog</Link>
            </div>
        );
    }

    return (
        <div className="blog-post">
            <Link to="/blog" className="blog-back-link">
                &larr; Back to Articles
            </Link>

            <div className="blog-post-header">
                <h1>{post.title}</h1>
            </div>

            <div className="blog-post-meta">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.category}</span>
            </div>

            <div className="blog-post-image">
                <img src={post.image} alt={post.title} />
            </div>
            <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </div>
    );
};

export default BlogPost;

