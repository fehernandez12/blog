import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostCard } from "../PostCard";
import { PostService } from "../services/post.service";
import { TagService } from "../services/tag.service";
import { Post, Tag } from "../types/blog.type";
import { ScrollUtils } from "../utils/scrollUtils";

function TagList(props: any) {
    let params = useParams();
    const [posts, setPosts] = useState<Post[]>([]);
    const [tag, setTag] = useState<Tag>({} as Tag);
    useEffect(() => {
        const fetchPosts = async (slug:string) => {
            const api = await PostService.getByTagSlug(slug);
            const result = await api.json();
            setPosts(result);
        }
        const fetchTag = async (slug: string) => {
            const api = await TagService.getBySlug(slug);
            const result = await api.json();
            setTag(result);
        }
        fetchTag(params.tagSlug!);
        console.log(tag);
        fetchPosts(params.tagSlug!);
    }, []);

    const scrollDown = (num: number) => {
        ScrollUtils.scrollTo(document.body, num, 1250);
    }

    const capitalize = (string: string) => {
        let str = string.replace('-', ' ');
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    
    return (
        <React.Fragment>
            <div className="row h-100 d-flex align-items-center text-center">
                <h1>
                    <span className="display-1">
                        {tag.slug}
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

export { TagList };