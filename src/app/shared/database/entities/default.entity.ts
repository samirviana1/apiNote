import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  Column,
} from "typeorm";
import {v4} from "uuid";

@Entity()
export abstract class DefaultEntity {
  @PrimaryColumn()
  uid!: string;

  @Column({name: "created_at", type: "timestamp"})
  createdAt!: Date;

  @Column({name: "updated_at", type: "timestamp"})
  updatedAt?: Date | null;

  @BeforeInsert()
  beforeCreate() {
    //this.uid = v4();
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.updatedAt = new Date();
  }
}
