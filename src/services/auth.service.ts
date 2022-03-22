import { AuthRequest, ValidateRequest } from "../types/blog.type";

class AuthService {
    static SERVER_URL = 'http://localhost:8080/api/';
    private static headers = {
        'Content-Type': 'application/json',
        Authorization: `bearer ${localStorage.getItem('blogToken')}`
    };
    static authenticate(request: AuthRequest) {
        let headers = {
            'Content-Type': 'application/json',
            // La petición de autenticación no lleva headers
            //'Authorization': `bearer ${localStorage.getItem('blogToken')}`
        };
        return fetch(this.SERVER_URL + 'auth/authenticate',
            {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(request)
            }
        );
    }

    static async generateToken(): Promise<any> {
        const api = await this.authenticate(
            {
                username: localStorage.getItem('blogUsername')!,
                password: localStorage.getItem('blogPassword')!
            }
        );
        return await api.json();
    }

    static async validateToken(request: ValidateRequest) {
        const api = await fetch(this.SERVER_URL + 'auth/validate',
            {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(request)
            }
        );
        const response = await api.json();
        return response.valid;
    }
}

export { AuthService };