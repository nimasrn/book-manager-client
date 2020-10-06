import { environment } from 'src/environments/environment';
import { Address } from './book.model';

export class User {
  id: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;

  constructor(json?) {
    if (json) {
      this.id = json.id;
      this.email = json.email;
      this.password = json.password;
      this.role = json.role;
      this.isActive = json.isActive;
    }
  }
  static token() {
    return localStorage.getItem('token');
  }
}
