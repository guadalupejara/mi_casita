// types/user.ts
export interface UserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface User extends UserInput {
  id: number;
  createdAt?: string; 
  updatedAt?: string;
}
