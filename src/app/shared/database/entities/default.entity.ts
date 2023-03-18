import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import {v4} from "uuid";

@Entity()
export abstract class DefaultEntity {
  @PrimaryColumn()
  uid!: string;

  @CreateDateColumn("created_at")
  createdAt!: Date;

  @UpdateDateColumn("updated_at")
  updatedAt?: Date | null;

  @BeforeInsert()
  beforeCreate() {
    this.uid = v4();
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.updatedAt = new Date();
  }
}
