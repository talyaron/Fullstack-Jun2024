export class User {
    username: string;
    password: string;
    email: string;
    phone: string;
    id: string;
  
    constructor(
      username: string,
      phone: string,
      email: string,
      password: string
    ) {
      this.username = username;
      this.password = password;
      this.email = email;
      this.phone = phone;
      this.id = `id-${crypto.randomUUID()}`;
    }
  }