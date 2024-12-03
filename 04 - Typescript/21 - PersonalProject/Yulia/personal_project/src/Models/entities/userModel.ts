// User interface
export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string; // Optional field for phone
}

// User class implementing the interface
export class User implements IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;

  constructor(name: string, email: string, password: string, phone?: string) {
    this.id = crypto.randomUUID(); // Generate unique ID
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone; // Assign phone if provided
  }

  // Save user to Local Storage
  saveToLocalStorage() {
    const users = User.getUsersFromLocalStorage();
    users.push(this);
    localStorage.setItem("users", JSON.stringify(users));
  }

  // Get all users from Local Storage
  static getUsersFromLocalStorage(): IUser[] {
    return JSON.parse(localStorage.getItem("users") || "[]");
  }

  // Find user by email
  static findUserByEmail(email: string): IUser | undefined {
    const users = User.getUsersFromLocalStorage();
    return users.find((user) => user.email === email);
  }

  // Initialize example users and save them to Local Storage
  static initializeExampleUsers() {
    const exampleUsers = [
      new User("Alice", "alice@example.com", "password123", "1234567890"),
      new User("Bob", "bob@example.com", "password123", "2345678901"),
      new User("Charlie", "charlie@example.com", "password123", "3456789012"),
      new User("David", "david@example.com", "password123", "4567890123"),
      new User("Eve", "eve@example.com", "password123", "5678901234"),
    ];

    exampleUsers.forEach((user) => user.saveToLocalStorage());
  }
}

// Call this function once to add example users
User.initializeExampleUsers();
