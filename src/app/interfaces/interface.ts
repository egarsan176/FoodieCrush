
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
    status: number,
    message: string,
}

export interface Recipe{
    recipeName: string,
    method: string [],
    category: number,
    ingredientLine: IngredientLine[]

}

export interface IngredientLine{
    ingredient: string,
    amount: number
}
