import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class ValidatorService {
     
    public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  
    public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; 

    //minimo 8 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.. NO otros símbolos
    public passwordPattern: string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$";


    camposIguales( campo1: string, campo2: string ) {

        return ( formGroup: AbstractControl ): ValidationErrors | null => {
    
          const pass1 = formGroup.get(campo1)?.value;
          const pass2 = formGroup.get(campo2)?.value;
    
          if ( pass1 !== pass2 ) {
            formGroup.get(campo2)?.setErrors({ noIguales: true });
            return { noIguales: true }
          } 
    
          formGroup.get(campo2)?.setErrors(null);
    
          return null
        }
    
      }

}