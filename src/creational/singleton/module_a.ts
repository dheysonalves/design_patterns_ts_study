import {MyDatabaseSingleton} from './database/my-database-singleton';
import {DatabaseModule} from './database/my-database-module';
// const instance = MyDatabaseSingleton.instance;

const myDatabaseModuleA = DatabaseModule;

DatabaseModule.add({ name: 'Jack', age: 30 });
DatabaseModule.add({ name: 'Mary', age: 30 });
DatabaseModule.add({ name: 'Jonny', age: 30 });


export { myDatabaseModuleA };
