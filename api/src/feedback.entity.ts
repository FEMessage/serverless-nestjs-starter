import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'character varying', length: 16})
  type: string;

  @Column({type: 'character varying', length: 16})
  status: string;

  @Column({type: "text"})
  content: string;

  @Column({type: "text"})
  note: string;

  @Column({type: 'character varying', length: 32})
  user_email: string;

  @Column({type: 'character varying', length: 32})
  repo_name: string;

  @Column({type: 'character varying', length: 16})
  created_by: string;

  @CreateDateColumn()
  created_time: Date;

  @UpdateDateColumn()
  updated_time: Date;
}