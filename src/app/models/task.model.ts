import {v4} from "uuid";

export class Task {
  uid: string;
  userUid: string;
  title: string;
  description: string;

  constructor(
    uid: string,
    userUid: string,
    title: string,
    description: string
  ) {
    this.uid = v4();
    this.userUid = userUid;
    this.title = title;
    this.description = description;
  }

  static create(
    uid: string,
    userUid: string,
    title: string,
    description: string
  ): Task {
    return new Task(uid, userUid, title, description);
  }

  /*toJson() {
        return {
            uid: this.uid,
            userUid: this.userUid,
            title: this.title,
            description: this.description,
        };
    }*/
}
