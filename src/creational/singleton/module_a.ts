import {MyDatabaseSingleton} from './database/my-database-singleton';

const instance = MyDatabaseSingleton.getInstance();

instance.add({ name: 'Jack', age: 30 });
instance.add({ name: 'Mary', age: 30 });
instance.add({ name: 'Jonny', age: 30 });


