import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageTitle } from "../PageTitle";
import { PostCard } from "../PostCard";
import { CategoryService } from "../services/category.service";
import { PostService } from "../services/post.service";
import { Category, Post } from "../types/blog.type";

function CategoryList() {
  let params = useParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [category, setCategory] = useState<Category>({} as Category);
  useEffect(() => { 
    const fetchPosts = async (slug: string) => {
      const api = await PostService.getByCategorySlug(slug);
      const result = await api.json();
      setPosts(result);
    };
    const fetchCategory = async (slug: string) => {
      const api = await CategoryService.getCategoryBySlug(slug);
      const result = await api.json();
      setCategory(result);
    }
    fetchCategory(params.categorySlug!);
    fetchPosts(params.categorySlug!);
  }, []);
  return (
    <React.Fragment>
      <PageTitle kind={'Categoría'} title={category.title} />
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

export { CategoryList };