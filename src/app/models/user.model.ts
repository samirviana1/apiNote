import { v4 } from 'uuid';

export class User {
    uid: string;
    name: string;
    email: string;
    password: string;

    constructor(name: string, email: string, password: string) {
        this.uid = v4();
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static create(name: string, email: string, password: string): User {
        return new User(name, email, password);
    }

    toJson() {
        return {
            uid: this.uid,
            name: this.name,
            email: this.email,
            password: this.password,
        };
    }
}
