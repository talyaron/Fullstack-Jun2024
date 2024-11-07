export interface loggedUser {
  userID: string;
  date: Date;
  remember: string;
}

export class User {
  id: string;
  email: string;
  name: string;
  password: string;
  key?: string;
  remember?: boolean;
  constructor(email: string, name: string, password: string) {
    this.id = crypto.randomUUID();
    this.email = email;
    this.name = name;
    this.password = password;
  }
  assignKey() {
    this.key = `key=${crypto.randomUUID()}`;
  }
}
export const users: User[] = [];
export const loggedUsers: loggedUser[] = [];
const admin: User = new User("admin", "admin", "admin");
const admin2: User = new User("admin2", "admin2", "admin2");
users.push(admin, admin2);
