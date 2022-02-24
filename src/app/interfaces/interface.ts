
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
    ingredientLine: IngredientLine[],
    file: FileDB

}


export interface IngredientLine{
    ingredient: string,
    amount: number
}

export interface FileDB{
    name: string,
    data: number, 
    type: string
}


export interface IDemoNgComponentEventType {
    cmd: string;
    data: any;
  }