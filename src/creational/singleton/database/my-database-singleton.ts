interface User {
	name: string;
	age: number;
}
export class MyDatabaseSingleton {
	private static instance: MyDatabaseSingleton | null = null;
	private users: User[] = [];

	private constructor() {}

	public static getInstance(): MyDatabaseSingleton {
		if (MyDatabaseSingleton.instance === null) {
			MyDatabaseSingleton.instance = new MyDatabaseSingleton()
		}

		return MyDatabaseSingleton.instance;
	}

	add(user: User): void {
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

