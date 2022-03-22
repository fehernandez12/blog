
// Autenticación
export interface AuthRequest {
    username: string;
    password: string;
}

export interface ValidateRequest {
    token: string;
}

export interface AuthResponse {
    token: string;
}

// Posts
export interface Category {
    id: number;
    title: string;
    slug: string;
    description: string;
}
export interface Tag {
    id: number;
    title: string;
    slug: string;
    text: string;
}
export interface Comment {
    id: number;
    post: Post;
    visible: boolean;
    createdAt: Date;
    updatedAt: Date;
    content: string;
}
export interface Post {
    id: string;
    title: string;
    slug: string;
    summary: string;
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    content: string;
    categories: Category[];
    tags: Tag[];
    comments: Comment[]
}