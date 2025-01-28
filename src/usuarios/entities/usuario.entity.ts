import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nombre: string;
    
    @Column()
    correo: string;
    @Column()
    password: string;
    
  
    
}
