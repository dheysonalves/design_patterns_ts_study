class MyDatabaseSingleton {
	private static instance: MyDatabaseSingleton | null = null;

	private constructor() {}

	public static getInstance(): MyDatabaseSingleton {
		if (MyDatabaseSingleton.instance === null) {
			MyDatabaseSingleton.instance = new MyDatabaseSingleton()
		}

		return MyDatabaseSingleton.instance;
	}
}

const db1 = MyDatabaseSingleton.getInstance();
const db2 = MyDatabaseSingleton.getInstance();

console.log(db1 === db2);

