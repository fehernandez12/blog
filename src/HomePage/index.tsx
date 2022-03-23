import React, { useEffect, useState } from "react";
import {PostService} from "../services/post.service";
import { Post } from "../types/blog.type";
import { PostCard } from "../PostCard";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { duration } from "moment";
import { ScrollUtils } from "../utils/scrollUtils";

function HomePage(props: any) {
    const [posts, setPosts] = useState<Post[]>([]);

    const scrollDown = (num: number) => {
        ScrollUtils.scrollTo(document.body, num, 1250);
    }
    
    useEffect(() => {
        const fetchPosts = async () => {
            const api = await PostService.getPublished();
            const result = await api.json();
            setPosts(result);
        }
        fetchPosts();
    }, []);

    return (
        <React.Fragment>
            <div className="row h-100 d-flex align-items-center text-center">
                <h1>
                    <span className="display-1">
                        FH's blog.
                    </span>
                    <br />
                    <button className="btn btn-primary" onClick={() => scrollDown(1000)}>
                        <i className="bi-caret-down"></i>
                    </button>
                    
                </h1>
            </div>
            <div className="row">
                {posts.length > 0 ? posts.map(
                    (post) => 
                    (
                        <PostCard post={post} key={post.id} />
                    )
                ) : (
                    <div className="col text-center">
                        <h3>No hay ningún post (por ahora).</h3>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
}

export { HomePage };