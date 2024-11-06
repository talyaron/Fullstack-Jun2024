export interface User {
  id: string;
  username: string;
  password: string;
  email?: string; 
}

export const users: User[] = [];