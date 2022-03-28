import { AuthService } from "./auth.service";
import { SERVER_URL } from "./global";
import { Error } from "../utils/alertUtils";
class PostService {

    static SERVER_URL = SERVER_URL || 'http://localhost:8080/api/';
    private static headers = {
        'Content-Type': 'application/json',
        Authorization: `bearer ${localStorage.getItem('blogToken')}`
    };

    static getToken() {
        return localStorage.getItem('blogToken');
    }

    static async getAll(): Promise<any> {
        try {
            let token = this.getToken();
            if (token && await AuthService.validateToken({token: token})) {
                return await fetch(this.SERVER_URL + 'posts', {
                        method: 'GET',
                        headers: {
                            ...this.headers,
                            Authorization: `bearer ${this.getToken()}`
                        }
                });
            } else {
                const token = await AuthService.generateToken();
                localStorage.setItem('blogToken', token);
                return await fetch(this.SERVER_URL + 'posts', {
                    method: 'GET',
                    headers: {
                        ...this.headers,
                        Authorization: `bearer ${this.getToken()}`
                    }
            });
            }
        } catch (error) {
            Error.fire({ text: `Ocurrió un error al obtener los posts: ${error}` });
        }
    }

    static async getPublished(): Promise<any> {
        try {
            let token = this.getToken();
            if (token && await AuthService.validateToken({token: token})) {
                return await fetch(this.SERVER_URL + 'posts/published', {
                        method: 'GET',
                        headers: {
                            ...this.headers,
                            Authorization: `bearer ${this.getToken()}`
                        }
                });
            } else {
                const token = await AuthService.generateToken();
                localStorage.setItem('blogToken', token);
                return await fetch(this.SERVER_URL + 'posts/published', {
                    method: 'GET',
                    headers: {
                        ...this.headers,
                        Authorization: `bearer ${this.getToken()}`
                    }
            });
            }
        } catch (error) {
            Error.fire({ text: `Ocurrió un error al obtener los posts: ${error}` });
        }
    }

    static async getBySlug(slug: string): Promise<any> {
        try {
            let token = this.getToken();
            if (token && await AuthService.validateToken({token:token})) {
                return await fetch(`${this.SERVER_URL}posts/${slug}`, {
                    method: 'GET',
                    headers: {
                        ...this.headers,
                        Authorization: `bearer ${this.getToken()}`
                    }
                });
            } else {
                const token = await AuthService.generateToken();
                localStorage.setItem('blogToken', token);
                return await fetch(`${this.SERVER_URL}posts/${slug}`, {
                    method: 'GET',
                    headers: {
                        ...this.headers,
                        Authorization: `bearer ${this.getToken()}`
                    }
                });
            }
        } catch (error) {
            Error.fire({ text: `Ocurrió un error al obtener los posts: ${error}` });
        }
    }

    static async getByTagSlug(slug:string):Promise<any> {
        try {
            let token = this.getToken();
            if (token && await AuthService.validateToken({token:token})) {
                return await fetch(`${this.SERVER_URL}posts/tag/${slug}`, {
                    method: 'GET',
                    headers: {
                        ...this.headers,
                        Authorization: `bearer ${this.getToken()}`
                    }
                });
            } else {
                const token = await AuthService.generateToken();
                localStorage.setItem('blogToken', token);
                return await fetch(`${this.SERVER_URL}posts/tag/${slug}`, {
                    method: 'GET',
                    headers: {
                        ...this.headers,
                        Authorization: `bearer ${this.getToken()}`
                    }
                });
            }
        } catch (error) {
            Error.fire({
                text: `Ocurrió un error al obtener los posts: ${error}`
            })
        }
    }

    static async getByCategorySlug(slug:string): Promise<any> {
        try {
            let token = this.getToken();
            if (token && await AuthService.validateToken({token:token})) {
                return await fetch(`${this.SERVER_URL}posts/category/${slug}`, {
                    method: 'GET',
                    headers: {
                        ...this.headers,
                        Authorization: `bearer ${this.getToken()}`
                    }
                });
            } else {
                const token = await AuthService.generateToken();
                localStorage.setItem('blogToken', token);
                return await fetch(`${this.SERVER_URL}posts/category/${slug}`, {
                    method: 'GET',
                    headers: {
                        ...this.headers,
                        Authorization: `bearer ${this.getToken()}`
                    }
                });
            }
        } catch (error) {
            Error.fire({
                text: `Ocurrió un error al obtener los posts: ${error}`
            })
        }
    }
}

export { PostService };