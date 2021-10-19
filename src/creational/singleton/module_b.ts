import { MyDatabaseSingleton } from './database/my-database-singleton';
import './module_a';

const instance = MyDatabaseSingleton.getInstance();

instance.add({ name: 'Docker', age: 30 });
instance.add({ name: 'Rubber', age: 30 });
instance.add({ name: 'Pythony', age: 30 });

instance.show();
