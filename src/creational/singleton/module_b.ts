import { MyDatabaseSingleton } from './database/my-database-singleton';
import { DatabaseModule } from './database/my-database-module';
import {myDatabaseModuleA} from './module_a';

const myDatabaseModuleB = DatabaseModule;

myDatabaseModuleB.add({ name: 'Docker', age: 30 });
myDatabaseModuleB.add({ name: 'Rubber', age: 30 });
myDatabaseModuleB.add({ name: 'Pythony', age: 30 });

myDatabaseModuleB.show();

console.log(myDatabaseModuleA === myDatabaseModuleB);
