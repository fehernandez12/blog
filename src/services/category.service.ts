import { SERVER_URL } from "./global";
import { Error } from "../utils/alertUtils";
import { AuthService } from "./auth.service";

class CategoryService {
  static SERVER_URL = SERVER_URL || 'http://localhost:8080/api/';
  private static headers = {
      'Content-Type': 'application/json',
      Authorization: `bearer ${this.getToken()}`
  };

  static getToken() {
      return localStorage.getItem('blogToken');
  }

  static async getAll(): Promise<any> {
    try {
      let token = this.getToken();
      if (token && await AuthService.validateToken({token: token})) {
        return await fetch(this.SERVER_URL + 'categories', {
          method: 'GET',
          headers: {
            ...this.headers,
            Authorization: `bearer ${this.getToken()}`
          }
        });
      } else {
        const token = await AuthService.generateToken();
        localStorage.setItem('blogToken', token);
        return await fetch(this.SERVER_URL + 'categories', {
          method: 'GET',
          headers: {
              ...this.headers,
              Authorization: `bearer ${this.getToken()}`
          }
      });
      }
    } catch (error) {
      Error.fire({ text: `Ocurrió un error al obtener las categorías: ${error}` });
    }
  }

  static async getCategoryBySlug(slug: string): Promise<any> { 
    try {
      let token = this.getToken();
      if (token && await AuthService.validateToken({token: token})) {
        return await fetch(this.SERVER_URL + 'categories/' + slug, {
          method: 'GET',
          headers: {
            ...this.headers,
            Authorization: `bearer ${this.getToken()}`
          }
        });
      } else {
        const token = await AuthService.generateToken();
        localStorage.setItem('blogToken', token);
        return await fetch(this.SERVER_URL + 'categories/' + slug, {
          method: 'GET',
          headers: {
              ...this.headers,
              Authorization: `bearer ${this.getToken()}`
          }
      });
      }
    } catch (error) {
      Error.fire({ text: `Ocurrió un error al obtener la información de la categoría: ${error}` });
    }
  }
}

export { CategoryService };