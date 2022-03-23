import { AuthRequest, ValidateRequest } from "../types/blog.type";
import { SERVER_URL } from "./global";
import { Error } from "../utils/alertUtils";

class AuthService {
    static SERVER_URL = SERVER_URL || 'http://localhost:8080/api/';
    private static headers = {
        'Content-Type': 'application/json',
        Authorization: `bearer ${this.getToken()}`
    };

    static getToken() {
        return localStorage.getItem('blogToken');
    }

    static async authenticate(request: AuthRequest) {
        try {
            let headers = {
                'Content-Type': 'application/json',
                // La petición de autenticación no lleva headers
                //'Authorization': `bearer ${localStorage.getItem('blogToken')}`
            };
            return fetch(this.SERVER_URL + 'auth/authenticate',
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(request)
                }
            );
        } catch (error) {
            Error.fire({ text: `Ocurrió un error al intentar autenticar: ${error}` });
        }
    }

    static async generateToken(): Promise<any> {
        return await this.authenticate(
            {
                username: localStorage.getItem('blogUsername')!,
                password: localStorage.getItem('blogPassword')!
            }
        ).then(response => response?.json())
            .then(result => result.token);
    }

    static async validateToken(request: ValidateRequest) {
        try {
            let headers = {
                'Content-Type': 'application/json',
                // La petición de autenticación no lleva headers
                //'Authorization': `bearer ${localStorage.getItem('blogToken')}`
            };
            return await fetch(this.SERVER_URL + 'auth/validate',
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(request)
                }
            ).then(response => response.json())
                .then(result => result.valid);
        } catch (error) {
            Error.fire({ text: `Ocurrió un error al validar el token: ${error}` });
        }
    }
}

export { AuthService };