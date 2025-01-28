import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";


export class CreateUsuarioDto {

     @IsString()
        @Transform(({value}) => value.trim())
        @MinLength(5)
        nombre:string;
    
        @IsEmail()
        @Transform(({value}) => value.trim())
        correo: string;
    
     
        @Transform(({value}) => value.trim())
        password: string;
    

}
