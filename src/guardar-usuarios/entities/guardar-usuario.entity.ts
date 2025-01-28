import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GuardarUsuarios {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nombre: string;
    
    @Column()
    correo: string;

    @Column({ nullable: true }) // Permite que sea opcional en la base de datos
    edad?: number;
    
  
    
}
