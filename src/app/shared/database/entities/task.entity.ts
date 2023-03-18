import {DefaultEntity} from ".";
import {Entity, Column, ManyToOne, JoinColumn} from "typeorm";
import {UserEntity} from "./user.entity";

@Entity("tasks")
export class TaskEntity extends DefaultEntity {
  @Column({name: "user_id"})
  userUid!: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: "user_id"})
  user!: UserEntity;
}
