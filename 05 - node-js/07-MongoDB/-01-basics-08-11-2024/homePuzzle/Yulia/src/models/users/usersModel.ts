export interface User {
  id: string;
  username: string;
  password: string;
  email: string; 
}

export const users: User[] = [
  {
    id: "1",
    username: "User1",
    password: "password123",
    email: "user1@example.com",
  },
  {
    id: "2",
    username: "User2",
    password: "password456",
    email: "user2@example.com",
  },
];