import { IsEmail, IsString, MinLength } from "class-validator"
import { Transform } from "class-transformer"
export class RegisterDto {
    
    @IsString()
    @Transform(({value}) => value.trim())
    @MinLength(5)
    nombre:string;

    @IsEmail()
    @Transform(({value}) => value.trim())
    correo: string;

    @IsString()
    @Transform(({value}) => value.trim())
    password: string;


}
