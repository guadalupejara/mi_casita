// types/user.ts
export interface RegisterUserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LogInUserInput {
  email: string;
  password: string;
}

export interface User extends RegisterUserInput {
  id: number;
  createdAt?: string; 
  updatedAt?: string;
}
