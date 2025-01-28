import { IsEmail, IsInt, IsOptional, IsPositive, IsString, MinLength } from "class-validator"
import { Transform } from "class-transformer"

export class UpdateGuardarUsuarioDto {
        @IsString()
        @MinLength(5)
        nombre:string;
    
        @IsEmail()
        @Transform(({value}) => value.trim())
        correo: string;
    
        @IsOptional()
        @IsInt()
        @IsPositive()
        edad?:number;
}
