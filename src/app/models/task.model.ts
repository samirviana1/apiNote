import { v4 } from 'uuid';

export class Task {
    uid: string;
    userUid: string;
    title: string;
    description: string;

    constructor(userUid: string, title: string, description: string) {
        this.uid = v4();
        this.userUid = userUid;
        this.title = title;
        this.description = description;
    }

    static create(userUid: string, title: string, description: string): Task {
        return new Task(userUid, title, description);
    }

    toJson() {
        return {
            uid: this.uid,
            userUid: this.userUid,
            title: this.title,
            description: this.description,
        };
    }
}
