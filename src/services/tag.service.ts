import { AuthService } from "./auth.service";
import { SERVER_URL } from "./global";
import { Error } from "../utils/alertUtils";

class TagService {
    static SERVER_URL = SERVER_URL || 'http://localhost:8080/api/';
    private static headers = {
        'Content-Type': 'application/json',
        Authorization: `bearer ${localStorage.getItem('blogToken')}`
    };

    static getToken() {
        return localStorage.getItem('blogToken');
    }

    static async getBySlug(slug: string): Promise<any> {
        try {
            let token = this.getToken();
            if (token && await AuthService.validateToken({token:token})) {
                return await fetch(`${this.SERVER_URL}tags/${slug}`, {
                    method: 'GET',
                    headers: {
                        ...this.headers,
                        Authorization: `bearer ${this.getToken()}`
                    }
                });
            } else {
                const token = await AuthService.generateToken();
                localStorage.setItem('blogToken', token);
                return await fetch(`${this.SERVER_URL}tags/${slug}`, {
                    method: 'GET',
                    headers: {
                        ...this.headers,
                        Authorization: `bearer ${this.getToken()}`
                    }
                });
            }
        } catch (error) {
            Error.fire({ text: `Ocurrió un error al obtener la información del tag: ${error}` });
        }
    }
}

export { TagService };