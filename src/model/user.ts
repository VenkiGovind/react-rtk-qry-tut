export interface IAuth {
  userId: number;
  userName: string;
  isAuthenticated: boolean;
  token: string;
};

export interface IUserProfile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};