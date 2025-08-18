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

export interface RegisterUserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SettingsFormValues extends RegisterUserInput {
  phoneNumber?: string;
  currentPassword: string;
  newPassword?: string;
  confirmNewPassword?: string;
  originalEmail?: string,

}

export interface LoginUserData {
  email: string;
  password: string;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}


export interface SideNavProps {
  setView: React.Dispatch<React.SetStateAction<'home' | 'settings'>>;
}