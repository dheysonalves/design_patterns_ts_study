import { IUserSingleton } from '../../interfaces/UserSingleton';
export class MyDatabaseSingleton {
  private static _instance: MyDatabaseSingleton | null = null;
  private users: IUserSingleton[] = [];

  private constructor() {}

  static get instance(): MyDatabaseSingleton {
    if (MyDatabaseSingleton._instance === null) {
      MyDatabaseSingleton._instance = new MyDatabaseSingleton();
    }

    return MyDatabaseSingleton._instance;
  }

  add(user: IUserSingleton): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

