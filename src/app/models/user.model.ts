import {v4} from "uuid";

export class User {
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static create(name: string, email: string, password: string): User {
    return new User(name, email, password);
  }
}

//   static fromJson(json: JsonUser) {
//     const instance = ne

//static from(json.name, json.email, json.password);
//     instance.uid = json.uid;

//     return instance;
//   }
