// Model: Represents the data and business logic
// This is a simple User model
export class User {
  // User's name
  name: string;
  // User's age
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Returns a greeting message
  getGreeting(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
