import {v4} from "uuid";

export class User {
  uid: string;
  name: string;
  email: string;
  password: string;

  constructor(uid: string, name: string, email: string, password: string) {
    this.uid = v4();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static create(
    uid: string,
    name: string,
    email: string,
    password: string
  ): User {
    return new User(uid, name, email, password);
  }
}

//   static fromJson(json: JsonUser) {
//     const instance = ne

//static from(json.name, json.email, json.password);
//     instance.uid = json.uid;

//     return instance;
//   }
