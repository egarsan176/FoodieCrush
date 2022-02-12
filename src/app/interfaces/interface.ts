
export interface AuthResponse{
    access_token: string;   
}

export interface Usuario{
    fullName: string,
    username: string,
    email: string,
    password: string
}

export interface ErrorResponse{
    status: number;
    message: string;
  }