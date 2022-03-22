import { AuthService } from "./auth.service";
import { SERVER_URL } from "./global";
import { Error } from "../utils/alertUtils";
class PostService {

    static SERVER_URL = SERVER_URL || 'http://localhost:8080/api/';
    static token = localStorage.getItem('blogToken');
    private static headers = {
        'Content-Type': 'application/json',
        Authorization: `bearer ${localStorage.getItem('blogToken')}`
    };

    static async getAll(): Promise<any> {
        if (this.token && await AuthService.validateToken({token: this.token})) {
            return fetch(this.SERVER_URL + 'posts', {
                    method: 'GET',
                    headers: {
                        ...this.headers,
                        Authorization: `bearer ${localStorage.getItem('blogToken')}`
                    }
            });
        } else {
            const token = await AuthService.generateToken();
            localStorage.setItem('blogToken', token);
            return await this.getAll();
        }
    }

    static async getPublished(): Promise<any> {
        if (this.token && await AuthService.validateToken({token: this.token})) {
            return fetch(this.SERVER_URL + 'posts/published', {
                    method: 'GET',
                    headers: {
                        ...this.headers,
                        Authorization: `bearer ${localStorage.getItem('blogToken')}`
                    }
            });
        } else {
            const token = await AuthService.generateToken();
            localStorage.setItem('blogToken', token);
            return await this.getPublished();
        }
    }

    static async getBySlug(slug: string): Promise<any> {
        if (this.token && await AuthService.validateToken({token:this.token})) {
            return fetch(`${this.SERVER_URL}posts/${slug}`, {
                method: 'GET',
                headers: {
                    ...this.headers,
                    Authorization: `bearer ${localStorage.getItem('blogToken')}`
                }
            });
        } else {
            const token = await AuthService.generateToken();
            localStorage.setItem('blogToken', token);
            return await this.getBySlug(slug);
        }
    }

    static async getByTagSlug(slug:string):Promise<any> {
        try {
            if (this.token && await AuthService.validateToken({token:this.token})) {
                return fetch(`${this.SERVER_URL}posts/tag/${slug}`, {
                    method: 'GET',
                    headers: {
                        ...this.headers,
                        Authorization: `bearer ${localStorage.getItem('blogToken')}`
                    }
                });
            } else {
                const token = await AuthService.generateToken();
                localStorage.setItem('blogToken', token);
                return await this.getByTagSlug(slug);
            }
        } catch (error) {
            Error.fire({
                text: `Ocurrió un error al obtener los posts: ${error}`
            })
        }
    }

    static async getByCategorySlug(slug:string) {
        try {
            if (this.token && await AuthService.validateToken({token:this.token})) {
                return fetch(`${this.SERVER_URL}posts/category/${slug}`, {
                    method: 'GET',
                    headers: {
                        ...this.headers,
                        Authorization: `bearer ${localStorage.getItem('blogToken')}`
                    }
                });
            } else {
                const token = await AuthService.generateToken();
                localStorage.setItem('blogToken', token);
                return await this.getByTagSlug(slug);
            }
        } catch (error) {
            Error.fire({
                text: `Ocurrió un error al obtener los posts: ${error}`
            })
        }
    }
}

export { PostService };