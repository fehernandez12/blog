import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageTitle } from "../PageTitle";
import { PostCard } from "../PostCard";
import { PostService } from "../services/post.service";
import { TagService } from "../services/tag.service";
import { Post, Tag } from "../types/blog.type";

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
        fetchPosts(params.tagSlug!);
    }, []);
    
    return (
        <React.Fragment>
            <PageTitle kind={'Tag'} title={tag.title} />
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