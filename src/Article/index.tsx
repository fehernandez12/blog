import React, { useEffect, useState } from "react";
import { Blog } from "../Blog";
import { BlogPost } from "../BlogPost";
import { BlogTitle } from "../BlogTitle";
import { PostAuthor } from "../PostAuthor";
import { PostContent } from "../PostContent";
import { PostRelated } from "../PostRelated";
import { useParams } from "react-router-dom";
import { PostService } from "../services/post.service";
import { Post } from "../types/blog.type";

function Article(props: any) {
    let params = useParams();
    const [post, setPost] = useState<Post>({} as Post);
    useEffect(
        () => { 
            const fetchPost = async (slug:string) => {
                const api = await PostService.getBySlug(slug);
                const result = await api.json();
                setPost(result);
            }
            fetchPost(params.articleSlug!);
        }
        , []
    );
    
    return (
        <React.Fragment>
            <BlogTitle title={post.title} date={post.publishedAt} />
            <Blog>
                <BlogPost>
                    <PostContent summary={post.summary} content={post.content}></PostContent>
                    <PostAuthor tags={post.tags} categories={post.categories} />
                    <PostRelated></PostRelated>
                </BlogPost>
            </Blog>
        </React.Fragment>
    );
}

export { Article };