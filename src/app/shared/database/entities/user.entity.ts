import {DefaultEntity} from ".";
import {Entity, Column, OneToMany} from "typeorm";
import {TaskEntity} from "./task.entity";

@Entity("users")
export class UserEntity extends DefaultEntity {
  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => TaskEntity, (task) => task.user)
  tasks!: Array<TaskEntity>;
}
